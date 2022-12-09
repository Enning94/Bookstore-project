import React from 'react';

const book = ({ title, author }) => (
  <li className="wrapper">
    <div className="book-col">
      <h3> Action </h3>
      <h2 className="title">{title}</h2>
      <p className="author">{author}</p>
      <div className="book-col-btn">
        <button type="button">Comments</button>
        <span />
        <button type="button">Remove</button>
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
export default book;
