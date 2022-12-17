import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import Book from './Book';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  },
  // eslint-disable-next-line
  []);

  return (
    <div className="container">
      <ul>
        {(books).map((book) => (
          <Book
            title={book.title}
            id={book.item_id}
            author={book.author}
            key={book.item_id}
          />
        ))}
      </ul>
      <div className="underline" />
      <Form />
    </div>
  );
};

export default Books;
