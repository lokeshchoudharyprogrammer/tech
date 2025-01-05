import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './features/productsSlice'
import CategoriesSlice from './features/CategoriesSlice';
import SingleProductSlice from './features/SingleProduct';


export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: CategoriesSlice,
    singleProduct:SingleProductSlice
  },
})