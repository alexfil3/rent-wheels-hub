import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCarsForGallery = createAsyncThunk(
  'gallery/fetchCarsForGallery',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
