"use client";
import React, { useEffect, useState } from "react";
import styles from "./bookdetails.module.css";

import { useRouter } from "next/navigation";


interface Book {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    industryIdentifiers: {
      type: string;
      identifier: string;
    };
    imageLinks: {
      thumbnail: string;
    };
    description: string;
  };
}

const BookDetails = ({ params }: { params: { bookid: string } }) => {
  const [book, setBook] = useState<Book | null>(null);

  const { push } = useRouter();

  useEffect(() => {
    const fetchBookDetails = async () => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${params.bookid}`
      );
      const data = await response.json();
      setBook(data);
    };

    if (params.bookid) {
      fetchBookDetails();
      
    }
  }, [params.bookid]);

  if (!book) {
    return <>👀</>;
  } else {
    try {
      return (
        <>
          <div className={styles.container}>
            <div className={styles.header}>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
                className={styles.coverImage}
              />
              <div className={styles.details}>
                <h1 className={styles.title}>{book.volumeInfo.title}</h1>
                <h3 className={styles.author}>
                  Author(s): {book.volumeInfo.authors?.join(", ")}
                </h3>
                <h3>
                  Publisher: {book.volumeInfo.publisher}
                  <span>({book.volumeInfo.publishedDate})</span>
                </h3>
                <br />
              </div>
            </div>
            <h4 className={styles.description}>
              {book.volumeInfo.description}
            </h4>
          </div>
        </>
      );
    } catch (e) {
      return (
        <>
          <img
            src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1268.gif"
            alt="Loading"
          />
          {setTimeout(() => {
            push(`/search-book`);
          }, 4750)}
        </>
      );
    }
  }
};

export default BookDetails;
