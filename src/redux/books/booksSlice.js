import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      const { books } = state;
      books = [...books, newBook];
    },
    removeBook: (state, action) => {
      const targetBookId = action.payload;
      const { books } = state;
      books = books.filter((book) => book.book_id !== targetBookId);
    },
  },
});

export const { addBook, removeBook } = counterSlice.actions;

export default booksSlice.reducer;
