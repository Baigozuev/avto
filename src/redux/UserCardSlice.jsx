import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: JSON.parse(localStorage.getItem("user")) || [],
};

export const userCardSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    addUser(state, action) {
      localStorage.setItem(
        "user",
        JSON.stringify([...state. admin, action.payload])
      );
      state.admin = [...state.admin, action.payload];
    },
  },
});
export const { addUser } = userCardSlice.actions;
export default userCardSlice.reducer;
