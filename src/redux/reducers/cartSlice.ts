import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface CartItem {
  _id: string;
  productName: string;
  price: number;
  quantity: number;
  productImageURL: string;
}

interface CartState {
  cartItems: CartItem[];
}

interface UpdateQuantityPayload {
  id: string;
  quantity: number;
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingCartItemIndex = state.cartItems.findIndex(
        item => item._id === action.payload._id,
      );

      if (existingCartItemIndex !== -1) {
        state.cartItems[existingCartItemIndex].quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems
        .filter(item => item._id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      const { id, quantity } = action.payload;
      const cartItem = state.cartItems.find(item => item._id === id);
      if (cartItem) {
        cartItem.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
