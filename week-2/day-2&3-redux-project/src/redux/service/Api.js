import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (item, { rejectWithValue }) => {
    try {
      const { page = 1, categories = '' } = item; 
      console.log('Page:', page, 'Categories:', categories); 

      // Base requests
      const request1 = fetch('https://fakestoreapi.in/api/products');
      
      // Construct URL for request2
      let request2url = `https://fakestoreapi.in/api/products?page=${page}&limit=9`;

      if (categories && page) {
        request2url = `https://fakestoreapi.in/api/products/category?page=${page}&limit=9&type=${categories}`;
      }     
      
      const request2 = fetch(request2url);

      // Execute both requests concurrently
      const [response1, response2] = await Promise.all([request1, request2]);

      // Check for errors in responses
      if (!response1.ok || !response2.ok) {
        throw new Error('Failed to fetch products from one or more sources');
      }

      // Parse JSON data
      const allProducts = await response1.json();
      const paginatedProducts = await response2.json();

      // Return combined data
      return { allProducts, paginatedProducts };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (categories, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://fakestoreapi.in/api/products/category`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);