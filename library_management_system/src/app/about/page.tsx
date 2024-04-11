
'use client'

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './about.module.css';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us | The Grand Library</title>
        <meta name="description" content="Discover the world of books and beyond at The Grand Library." />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to The Grand Library</h1>
        <Image src="/library-interior.jpg" alt="Library Interior" width={800} height={600} />
        <p className={styles.description}>
          Step into a realm where literature comes alive, where every book is a portal to another world.
          The Grand Library isn't just a place to borrow books; it's a sanctuary for the curious minds and a
          treasure trove for the knowledge seekers.
        </p>
        <div className={styles.features}>
          <h2>What We Offer</h2>
          <ul>
            <li>**An extensive collection** of books across all genres.</li>
            <li>**State-of-the-art book reservation system** - Reserve your favorite titles online and pick them up at your convenience.</li>
            <li>**Inspiring spaces** for reading, learning, and collaborating.</li>
            <li>**Events and workshops** that bring stories to life.</li>
          </ul>
        </div>
        <div className={styles.reservation}>
          <h2>Reserve Online, Pick Up In-Person</h2>
          <p>
            With our innovative online reservation system, you can ensure your next read is waiting for you.
            Browse our digital catalog, reserve your selection, and we'll have it ready for you to collect.
            It's convenience, redefined.
          </p>
        </div>
        <div className={styles.mission}>
          <h2>Our Mission</h2>
          <p>
            At The Grand Library, we believe in the power of books to transform lives. Our mission is to provide
            easy access to literature for everyone and to foster a community that thrives on learning and cultural enrichment.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
