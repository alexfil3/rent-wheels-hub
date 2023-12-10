import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './catalog/catalogSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    filter: filterReducer,
  },
});
console.log('store');
