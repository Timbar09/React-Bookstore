import { configureStore } from '@reduxjs/toolkit';
import booksReducers from './books/booksSlice';
import categoriesReducers from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducers,
    categories: categoriesReducers,
  },
});

export default store;
