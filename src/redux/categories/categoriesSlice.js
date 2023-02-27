import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      const { categories, status } = state;
      categories.length > 0 ? (status = 'Categories Available!') : (status = 'Under construction!');
    },
  },
});

export const { checkStatus } = counterSlice.actions;

export default categoriesSlice.reducer;
