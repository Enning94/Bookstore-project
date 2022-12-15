import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.book);

  return (
    <div className="container">
      <ul>
        {books.map((book) => (
          <Book
            title={book.title}
            id={book.id}
            author={book.author}
            key={book.id}
          />
        ))}
      </ul>
      <div className="underline" />
      <Form />
    </div>
  );
};

export default Books;
