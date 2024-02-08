import { createSlice } from '@reduxjs/toolkit';
import {
  changeFilterValue,
  changeIsOpen,
  changeIsOpenPrice,
  fetchAllCars,
} from './filterOperations';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    items: [],
    formData: { brand: '', price: '', mileageFrom: '', mileageTo: '' },
    isOpenBrand: false,
    isOpenPrice: false,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAllCars.fulfilled, (state, { payload }) => {
        state.items = payload.result;
      })
      .addCase(changeFilterValue.fulfilled, (state, { payload }) => {
        state.formData = payload;
      })
      .addCase(changeIsOpen.fulfilled, (state, { payload }) => {
        state.isOpenBrand = payload;
      })
      .addCase(changeIsOpenPrice.fulfilled, (state, { payload }) => {
        state.isOpenPrice = payload;
      }),
});

export const filterReducer = filterSlice.reducer;
