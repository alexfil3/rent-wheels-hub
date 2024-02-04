import { createSlice } from '@reduxjs/toolkit';
import { fetchCarsForGallery } from './galleryOperations';

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    items: [],
  },
  extraReducers: builder =>
    builder.addCase(fetchCarsForGallery.fulfilled, (state, { payload }) => {
      state.items = payload;
    }),
});

export const galleryReducer = gallerySlice.reducer;
