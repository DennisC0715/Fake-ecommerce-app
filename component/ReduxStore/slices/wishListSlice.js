import { createSlice } from "@reduxjs/toolkit";

const wishListInitailState = {
  wishListItems: [],
  showModal: false,
  isAdding: false,
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState: wishListInitailState,
  reducers: {
    wishListToggle: (state, action) => {
      const existingItem = state.wishListItems.filter(
        (item) => item.id === action.payload.id
      );
      const itemExist = existingItem.length;

      if (itemExist === 0) {
        state.wishListItems.push(action.payload);
        state.wishListItems = [...state.wishListItems];
        state.showModal = true;
        state.isAdding = true;
      }

      if (itemExist === 1) {
        state.wishListItems = state.wishListItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.showModal = true;
        state.isAdding = false;
      }
    },
    removeItemFromList(state, action) {
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id !== action.payload
      );
      state.isAdding = false;
    },
    toggleModal: (state) => {
      state.showModal = !state.showModal;
    },
  },
});

export const { wishListToggle, removeItemFromList, toggleModal } =
  wishListSlice.actions;
export default wishListSlice.reducer;
