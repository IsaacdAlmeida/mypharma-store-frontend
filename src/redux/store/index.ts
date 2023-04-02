import { configureStore } from '@reduxjs/toolkit';
import productsSlice, { setProducts } from '../reducers/productsSlice';
import { getProducts } from '../../services/fetchProductsAPI';

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

async function fetchProductsToRedux() {
  try {
    const products = await getProducts();
    store.dispatch(setProducts(products));
  } catch (error) {
    console.log(error);
  }
}

void fetchProductsToRedux();