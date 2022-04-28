import { createSlice } from "@reduxjs/toolkit";

const wishListInitailState = {
  wishListItems: [],
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState: wishListInitailState,
  reducers: {
    wishListToggle: (state, action) => {
      const existingItemIds = state.wishListItems.filter(
        (item) => item.id === action.payload.id
      );
      const itemExist = existingItemIds.length;

      if (itemExist === 0) {
        state.wishListItems.push(action.payload);
        state.wishListItems = [...state.wishListItems];
      }
      if (itemExist === 1) {
        state.wishListItems = state.wishListItems.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    removeItemFromList(state, action) {
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { wishListToggle, removeItemFromList } = wishListSlice.actions;
export default wishListSlice.reducer;
