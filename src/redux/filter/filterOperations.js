import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllCars = createAsyncThunk(
  'filter/fetchAllCars',
  async (formData, thunkAPI) => {
    try {
      const url = new URL(
        'https://65716ea1d61ba6fcc0128070.mockapi.io/api/v1/advert'
      );
      url.searchParams.append('limit', 12);

      const { data } = await axios.get(url);
      let result = data;
      let minPrice = 0;

      if (formData.brand !== '' && formData.brand !== 'All') {
        result = result.filter(({ make }) => make === formData.brand);
      }

      if (formData.price !== '' && formData.price >= minPrice) {
        result = result.filter(({ rentalPrice }) => {
          const price = Number(rentalPrice.slice(1));
          return (
            price === Number(formData.price) || price < Number(formData.price)
          );
        });
      }
      if (formData.mileageFrom !== '') {
        result = result.filter(
          ({ mileage }) => mileage >= Number(formData.mileageFrom)
        );
      }
      if (formData.mileageTo !== '') {
        result = result.filter(({ mileage }) => mileage <= formData.mileageTo);
      }

      return result.length === 0
        ? { result, foundItems: false }
        : { result, foundItems: true };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeFilterValue = createAsyncThunk(
  'filter/changeFilterValue',
  async (value, thunkAPI) => {
    try {
      return value;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeIsOpen = createAsyncThunk(
  'filter/changeIsOpen',
  async (isOpen, thunkAPI) => {
    try {
      return isOpen;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeIsOpenPrice = createAsyncThunk(
  'filter/changeIsOpenPrice',
  async (isOpen, thunkAPI) => {
    try {
      return isOpen;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
