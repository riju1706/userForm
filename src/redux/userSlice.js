import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "ADDUSER",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
  },
});
export const userReducer = userSlice.reducer;
export const { addUser } = userSlice.actions;
