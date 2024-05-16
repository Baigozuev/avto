import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products:JSON.parse(localStorage.getItem("product")) ||[],
  details:{},
  category: []
};
export const garajCardSlice = createSlice({
  name: "GARAJ",
  initialState,
  reducers: {
    addGaraj(state, action) {
      localStorage.setItem("product",JSON.stringify([...state.products, action.payload]))
      state.products = [...state.products, action.payload];
    },
    productDeatils(state,action){
      state.details = action.payload
    },
    categoryMers(state,action) {
      state.products = state.category.filter((el) => el.category === "mers")

    }
  },
});
export const { addGaraj,productDeatils,categoryMers } = garajCardSlice.actions;
export default garajCardSlice.reducer;
