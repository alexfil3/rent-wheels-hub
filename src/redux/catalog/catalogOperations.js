import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://65716ea1d61ba6fcc0128070.mockapi.io/api/v1/advert';

export const fetchCars = createAsyncThunk(
  'catalog/fetchCars',
  async (page = 1, thunkAPI) => {
    try {
      const url = new URL(
        'https://65716ea1d61ba6fcc0128070.mockapi.io/api/v1/advert'
      );
      url.searchParams.append('page', page);
      url.searchParams.append('limit', 12);

      const { data } = await axios.get(url, (page = 1));
      const loadMore = data.length < 12;
      return { data, loadMore };
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

export const openModalWindow = createAsyncThunk(
  'catalog/openModalWindow',
  async (data, thunkAPI) => {
    try {
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  'catalog/fetchCarById',
  async (id, thunkAPI) => {
    try {
      console.log(id);
      // const url = new URL(

      // );

      const { data } = await axios.get(
        `https://65716ea1d61ba6fcc0128070.mockapi.io/api/v1/advert/${id}`
      );
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
