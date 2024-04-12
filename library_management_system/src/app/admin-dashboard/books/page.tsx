'use client'
import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
  title: string;
  author: string;
  publisher: string;
  category: string;
  isbn: string; 
  numCopies: number;
  shelf: string;
  status: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Title',
    width: 100,
    dataIndex: 'title',
    fixed: 'left',
  },
  {
    title: 'Author',
    width: 100,
    dataIndex: 'author', 
    fixed: 'left'
  },
  { title: 'ISBN', dataIndex: 'isbn' },
  { title: 'Category', dataIndex: 'category' },
  { title: 'Status', dataIndex: 'status' },
  { title: 'Publisher', dataIndex: 'publisher' },
  { title: 'Number of copies', dataIndex: 'numCopies' },
  { title: 'Shelf', dataIndex: 'shelf' },
  {
    title: 'Edit',
    fixed: 'right',
    width: 90,
    render: () => <a>Edit</a>,
  },
  {
    title: 'Delete',
    width: 90,
    render: () => <a>Delete</a>,
  }
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
];

const Books: React.FC = () => (
  <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} pagination={false} bordered />
);

export default Books;