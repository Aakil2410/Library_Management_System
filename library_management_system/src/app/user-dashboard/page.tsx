'use client'

import React from 'react';
import Head from 'next/head';
import styles from './/userdashboard.module.css';

interface Book {
  id: string;
  title: string;
  author: string;
  dueDate?: Date;
  reserved?: boolean;
}

// Mock data - replace with real data fetching logic
const borrowedBooks: Book[] = [
  // ...borrowed books data
];
const reservedBooks: Book[] = [
  // ...reserved books data
];

const Dashboard: React.FC = () => {
  // Function to handle book reservation
  const handleReservation = (bookId: string) => {
    // Implement reservation logic here
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>User Dashboard</title>
      </Head>
      <header className={styles.header}>
        <h1>Welcome to Your Library Dashboard</h1>
      </header>
      <nav className={styles.nav}>
        <ul>
          <li>Profile</li>
          <li>Borrowed Books</li>
          <li>Due Books</li>
          <li>Reserved Books</li>
        </ul>
      </nav>
      <main className={styles.main}>
        <section className={styles.profile}>
          {/* User profile and info */}
        </section>
        <section className={styles.borrowed}>
          <h2>Borrowed Books</h2>
          {/* List borrowed books */}
        </section>
        <section className={styles.due}>
          <h2>Due Books</h2>
          {/* List due books */}
        </section>
        <section className={styles.reserved}>
          <h2>Reserved Books</h2>
          {/* List reserved books and reservation button */}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
















/*
import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),

  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),

    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 256 }}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default App;*/