import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="category">
      <button type="button" onClick={handleClick}>
        Check Status
      </button>
    </div>
  );
};

export default Category;
