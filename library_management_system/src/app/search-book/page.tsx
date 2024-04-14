"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from "next/navigation";
import styles from './search.module.css';
import { message } from 'antd';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    industryIdentifiers: {
        type: string;
        identifier: string;
    };
    imageLinks: {
      thumbnail: string;
    };
  };
}

const SearchBooks: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [books, setBooks] = useState<Book[]>([]);


  const { push } = useRouter();

  const handleSearch = async () => {                            
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?&langRestrict=en&maxResults=40&orderBy=relevance&q=${searchTerm}+${filter}&printType=books`);
    const data = await response.json();
    console.log(data);
    setBooks(data.items || []);
  };

  const handleBooks = (bookId: string) => {
    push(`./search-book/${bookId}`);
    message.loading("Loading book details",1.5);  
    setTimeout(() => {
        message.success("Loaded");
    }, 1600);
  };
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Search Books</title>
      </Head>
      <div className={styles.searchArea}>
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="intitle">Title</option>
          <option value="inauthor">Author</option>
          <option value="inpublisher">Publisher</option>
          <option value="insubject">Subject</option>
          <option value="isbn">ISBN</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className={styles.results}>
        {books.map((book) => (
          <div key={book.id} className={styles.card} onClick={() => handleBooks(book.id)}>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
            <div className={styles.cardContent}>
              <h3 className={styles.title}>{book.volumeInfo.title}</h3>
              { book.volumeInfo.authors? <p>{book.volumeInfo.authors.join(", ")}</p> : <p>{book.volumeInfo.authors}</p> }
              { book.volumeInfo.industryIdentifiers ?  <p>{book.volumeInfo.industryIdentifiers.type}</p> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBooks;


