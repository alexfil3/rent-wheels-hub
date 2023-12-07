import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = new URL(
  'https://65716ea1d61ba6fcc0128070.mockapi.io/api/v1/advert'
);
url.searchParams.append('page', 1);
url.searchParams.append('limit', 12);

axios.defaults.baseURL = `${url}`;

export const fetchCars = createAsyncThunk(
  'catalog/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
