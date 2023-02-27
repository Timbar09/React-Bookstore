import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      book_id: 'book1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      book_id: 'book2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      book_id: 'book3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newState = { ...state };
      const newBook = action.payload;

      newState.books = [...newState.books, newBook];

      return newState;
    },
    removeBook: (state, action) => {
      const newState = { ...state };
      const targetBookId = action.payload;

      newState.books = newState.books.filter((book) => book.book_id !== targetBookId);

      return newState;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
