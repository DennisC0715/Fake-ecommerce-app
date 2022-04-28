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
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.cartItemNumber++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          key: newItem.key,
          detailImage: newItem.detailImage,
          set: newItem.set,
          year: newItem.year,
          made: newItem.made,
          model: newItem.model,
          engine: newItem.engine,
          price: newItem.price,
          image: newItem.image,
          isFavorite: newItem.isFavorite,
          description: newItem.description,
          quantity: 1,
        });

        state.totalPrice = state.totalPrice + Number(newItem.price);
      } else {
        existingItem.quantity++;

        state.totalPrice = state.totalPrice + Number(existingItem.price);
      }
    },
    cartRemoveItem: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      state.cartItemNumber--;
      state.totalPrice = state.totalPrice - item.price;
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
    },
  },
});

export const { cartAddItem, cartRemoveItem } = cartSlice.actions;
export default cartSlice.reducer;
