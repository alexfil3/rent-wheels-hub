import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCars,
  fetchFilteredCars,
  openModalWindow,
  fetchCarById,
  addToFavorite,
} from './catalogOperations';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    items: [],
    favorite: [],
    isLoading: false,
    error: null,
    isLoadMoreShown: true,
    isModalWindowOpen: false,
    car: {},
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.items.push(...payload.data);
        state.isLoading = false;
        state.error = null;
        state.isLoadMoreShown = !payload.loadMore;
      })
      .addCase(fetchFilteredCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFilteredCars.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(openModalWindow.fulfilled, (state, { payload }) => {
        state.isModalWindowOpen = payload;
      })
      .addCase(fetchCarById.fulfilled, (state, { payload }) => {
        state.car = payload;
      })
      .addCase(addToFavorite.fulfilled, (state, { payload }) => {
        state.favorite.push(payload);
      }),
});

export const catalogReducer = catalogSlice.reducer;
