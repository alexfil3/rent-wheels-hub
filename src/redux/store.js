import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './catalog/catalogSlice';
import { filterReducer } from './filter/filterSlice';
import { galleryReducer } from './gallery/gallerySlice';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    filter: filterReducer,
    gallery: galleryReducer,
  },
});
console.log('store');
