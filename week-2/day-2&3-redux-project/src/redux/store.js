import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './features/productsSlice'
import CategoriesSlice from './features/CategoriesSlice';
 

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: CategoriesSlice,
  },
})