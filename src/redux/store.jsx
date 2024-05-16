import { configureStore } from "@reduxjs/toolkit";
import UserCardSlice from "./UserCardSlice";
import GarajCardSlice from "./GarajCardSlice";
import AddBasketSlice from "./AddBasketSlice";

export const store = configureStore({
  reducer: {
    user:UserCardSlice,
    garaj:GarajCardSlice,
    basket: AddBasketSlice
  },
});
