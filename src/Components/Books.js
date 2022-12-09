import React from 'react';
import Form from './Form';
import Book from './Book';
// import './Styles/book.css';

function Books() {
  return (
    <div className="container">
      <ul className="book">
        <Book title="The Hunger Games" author="Suzanne Collins" />
      </ul>
      <div className="underline" />
      <Form />
    </div>
  );
}

export default Books;
