import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://65716ea1d61ba6fcc0128070.mockapi.io/api/v1/advert';

export const fetchCars = createAsyncThunk(
  'catalog/fetchCars',
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await axios.get(`?page=${page}&limit=12`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredCars = createAsyncThunk(
  'catalog/fetchFilteredCars',
  async (_, thunkAPI) => {
    try {
      console.log('fetch data filtered');
      const { data } = await axios.get();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
