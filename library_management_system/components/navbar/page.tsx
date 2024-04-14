'use client'

import React from 'react';
import styles from './navbar.module.css';
import { Button } from 'antd';

const Navbar: React.FC = () => {
  
  const haveToken = localStorage.getItem("token") !== null; 
  return (
    <nav className={styles.navbar}>
      <img src="https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-library-books-stack-icon-png-image_4856265.png" alt="Library Icon" className={styles.icon} />
      <ul className={styles.navLinks}>
        <li><a href="/">Home</a></li>
        <li><a href="/search-book">Find Book</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      {!haveToken ? <div>
        <Button type="primary" href="/sign-in">Sign In</Button>
        <Button type="dashed" href="/sign-up">Sign Up</Button>
      </div> : <div><Button type="default" href="/user-dashboard">Dashboard</Button></div>}
      
      
    </nav>
  );
};

export default Navbar;
