import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBooks, deleteBookOne } from '../redux/books/books';
import './Styles/book.css';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const handleDeleteBtnClick = () => {
    const data = {
      item_id: id,
    };
    dispatch(deleteBooks(data)).then(() => {
      dispatch(deleteBookOne(data));
    });
  };
  return (
    <li className="wrapper">
      <div className="book-col">
        <h4 className="category"> Action </h4>
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <div className="book-col-btn">
          <button type="button">Comments</button>
          <span />
          <button type="button" onClick={handleDeleteBtnClick}>Remove</button>
          <span />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress-update">
        <span className="circular-progress" />
        <div className="progress-detail">
          <span>64%</span>
          <span>Completed</span>
        </div>
      </div>
      <div className="chapter-update">
        <span>Current Chapter</span>
        <span>Chapter 17</span>
        <button type="button">UPDATED PROGRESS</button>
      </div>
    </li>
  );
};
export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
