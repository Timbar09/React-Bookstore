import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    // {
    //   bookId: 'book1',
    //   title: 'The Great Gatsby',
    //   author: 'John Smith',
    //   category: 'Fiction',
    // },
    // {
    //   bookId: 'book2',
    //   title: 'Anna Karenina',
    //   author: 'Leo Tolstoy',
    //   category: 'Fiction',
    // },
    // {
    //   bookId: 'book3',
    //   title: 'The Selfish Gene',
    //   author: 'Richard Dawkins',
    //   category: 'Nonfiction',
    // },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newState = { ...state };
      const { payload } = action;
      const newBook = {
        item_id: payload.bookId,
        title: payload.title,
        author: payload.author,
        cartegory: 'Nonfiction',
      };
      newState.books = [...newState.books, newBook];

      return newState;
    },
    removeBook: (state, action) => {
      const newState = { ...state };
      const targetBookId = action.payload;

      newState.books = newState.books.filter((book) => book.item_id !== targetBookId);

      return newState;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
