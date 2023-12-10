import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchFilteredCars } from './catalogOperations';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder =>
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.items.push(...payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchFilteredCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFilteredCars.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      }),
});

export const catalogReducer = catalogSlice.reducer;
