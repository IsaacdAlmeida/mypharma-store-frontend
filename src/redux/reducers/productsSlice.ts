import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface Product {
  _id: string;
  productName: string;
  price: number;
  category: string;
  description: string;
  productImageURL: string;
}

interface ProductState {
  arrayOfProducts: Product[];
}

const initialState: ProductState = {
  arrayOfProducts: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.arrayOfProducts = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export const selectProduct = 
  (state: RootState) => state.products.arrayOfProducts;

export default productsSlice.reducer;