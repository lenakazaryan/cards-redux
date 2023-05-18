import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  inputValue: "",
  cardId: "",
  cards: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    addCardTitle: (state, action) => {
      state.inputValue = action.payload;
    },
    addCardId: (state) => {
      state.cardId += 1;
    },
  },
});

export const { openModal, closeModal, addCard, addCardTitle, addCardId } =
  cartSlice.actions;

export const openModalSelector = (state) => state.cart.isOpen;
export const allCardSelector = (state) => state.cart.cards;
export const cardTitleSelector = (state) => state.cart.inputValue;
export const cardIdSelector = (state) => state.cart.cardId;

export default cartSlice.reducer;
