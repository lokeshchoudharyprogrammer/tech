import { createSlice } from '@reduxjs/toolkit';
import { SingleProduct } from '../service/Api';

const initialState = {
  products: [],
  status: 'idle', 
  error: null,
};

const SingleProductSlice = createSlice({
  name: 'singleProduct',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(SingleProduct.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(SingleProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(SingleProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { getSingleProduct } = SingleProductSlice.actions;

export default SingleProductSlice.reducer;
