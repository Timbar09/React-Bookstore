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
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
