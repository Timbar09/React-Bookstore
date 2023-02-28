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
      const newState = { ...state };
      if (newState.categories.length > 0) {
        newState.status = 'Categories Available!';
      }
      newState.status = 'Under construction!';

      return newState;
    },
    bookOrigin: (state, action) => {
      const newState = { ...state };
      const country = action.payload;

      newState.categories = newState.categories.filter((cartegory) => cartegory.name !== country);

      return newState;
    },
  },
});

export const { checkStatus, bookOrigin } = categoriesSlice.actions;

export default categoriesSlice.reducer;
