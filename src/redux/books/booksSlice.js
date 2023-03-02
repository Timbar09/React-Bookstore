import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBooks, storeBook, deleteBook } from '../../api';

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
  isLoading: false,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await getBooks();
  return response;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await storeBook(book);
  return response;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await deleteBook(id);
  return id;
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBookUI: (state, action) => {
      const newState = { ...state };
      const newBook = {
        ...action.payload,
        cartegory: 'Unknown',
      };
      newState.books = [...newState.books, newBook];
      return newState;
    },
    // removeBook: (state, action) => {
    //   const newState = { ...state };
    //   const targetBookId = action.payload;
    //   newState.books = newState.books.filter((book) => book.item_id !== targetBookId);
    //   return newState;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        const newState = { ...state };
        newState.isLoading = true;
        return newState;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.isLoading = false;
        newState.books = action.payload;
        return newState;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.books.push(action.payload);
        return newState;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.books = newState.books.filter((book) => book.item_id !== action.payload);
        return newState;
      });
  },
});

export const { addBookUI } = booksSlice.actions;

export default booksSlice.reducer;
