import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newState = [...state, action.payload];
      return newState;
    },
    removeBook: (state, action) => {
      const newState = state.filter((book) => book.id !== action.payload);
      return newState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBook, removeBook } = counterSlice.actions;

export default booksSlice.reducer;
