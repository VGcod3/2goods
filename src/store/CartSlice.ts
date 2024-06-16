import { iOffer } from "@/app/products-data";
import { createSlice } from "@reduxjs/toolkit";

export const CONSTANTS = {
  min: 10,
  max: 1000,
  step: 10,
  defaultValue: 350,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as iOffer[],
    total: 0,
    discount: {
      isDiscount: false,
      discountValue: 0,
    },
  },
  reducers: {
    setStoreDiscount(state, action) {
      state.discount = action.payload;
    },

    removeStoreDiscount(state) {
      state.discount = {
        isDiscount: false,
        discountValue: 0,
      };
    },

    addTickets(state, action) {
      const item = state.items.find(
        (item) => item.name === action.payload.name
      ) as iOffer;

      item.quantity + 10 > CONSTANTS.max
        ? CONSTANTS.max
        : (item.quantity += 10);
    },
    substractTickets(state, action) {
      const item = state.items.find(
        (item) => item.name === action.payload.name
      ) as iOffer;

      item.quantity - 10 < CONSTANTS.min
        ? CONSTANTS.min
        : (item.quantity -= 10);
    },
    addToStore(state, action) {
      const item = state.items.find(
        (item) => item.name === action.payload.name
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromStore(state, action) {
      state.items = state.items.filter(
        (item) => item.name !== action.payload.name
      );
    },
    clearStoreCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToStore,
  removeFromStore,
  addTickets: addStoreTickets,
  substractTickets: subStoreTickets,
  clearStoreCart,
  setStoreDiscount,
  removeStoreDiscount,
} = cartSlice.actions;

export default cartSlice.reducer;
