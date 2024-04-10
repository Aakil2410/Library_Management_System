'use client'
import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/navbar/page';
import Card from '../../components/card/page';
import styles from "./globals.module.css";

const HomePage: React.FC = () => {
  const services = [
    { title: 'Book Borrowing', image: '/book-borrowing.jpg', description: 'Borrow books for a specified period' },
    { title: 'Reading Areas', image: '/reading-areas.jpg', description: 'Comfortable areas dedicated for reading' },
    { title: 'Study Areas', image: '/study-areas.jpg', description: 'Quiet areas perfect for studying' },
    // Add more services as needed
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Library Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Navbar />
      </header>

      <main className={styles.main}>
        {services.map((service, index) => (
          <Card key={index} title={service.title} image={service.image} description={service.description} />
        ))}
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Library Home Page. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
