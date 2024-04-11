'use client'
import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/navbar/page';
import Card from '../../components/card/page';
import styles from "./globals.module.css";
import Footer from '../../components/footer/page';

const HomePage: React.FC = () => {
  const services = [
    { title: 'Book Borrowing', image: 'https://t4.ftcdn.net/jpg/02/54/81/51/360_F_254815102_RIsLZtrNZowsnxdSUPzqrtz35Auv2jQJ.jpg', description: 'Borrow books for a specified period' },
    { title: 'Reading Areas', image: 'https://t3.ftcdn.net/jpg/05/46/23/54/240_F_546235426_MBYIJBuxzfByc44XBaESOHyZvDgMkEMw.jpg', description: 'Comfortable areas dedicated for reading' },
    { title: 'Study Areas', image: 'https://vidhilegalpolicy.in/wp-content/uploads/2022/03/istockphoto-1188429866-612x612-1.jpg', description: 'Quiet areas perfect for studying' }
    
    
    
    // Add more services as needed
  ];

  return (
    <div className={styles.container}>


      {/* <Head>
        <title>Library Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <header className={styles.header}>
        <title>Library Home Page</title>
        <Navbar />
      </header>

      <main className={styles.main}>
        {services.map((service, index) => (
          <Card key={index} title={service.title} image={service.image} description={service.description} />
        ))}
      </main>

      <Footer/>
      {/* <footer className={styles.footer}>
        <p>© 2024 Library Home Page. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default HomePage;
