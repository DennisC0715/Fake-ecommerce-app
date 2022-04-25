import { createSlice } from "@reduxjs/toolkit";

const cartInitalState = {
  cartItems: [],
  cartItemNumber: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitalState,
  reducers: {
    cartAddItem: (state, action) => {
      state.cartItems.push(action.payload);
      state.cartItemNumber = state.cartItems.length;
      state.totalPrice =
        state.totalPrice +
        Number(state.cartItems[state.cartItemNumber - 1].price);
    },
  },
});

const wishListInitailState = {
  wishListItems: [],
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState: wishListInitailState,
  reducers: {
    wishListAddItem: (state) => {
      state.wishListItems.push(action.payload);
    },
  },
});

export const { cartAddItem } = cartSlice.actions;
export default cartSlice.reducer;
