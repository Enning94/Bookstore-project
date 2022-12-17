import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const store = configureStore({
  reducer: {
    book: booksReducer,
    category: categoriesReducer,
  },
}, applyMiddleware(thunk));

export default store;
