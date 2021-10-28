import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isToggle: false,
  notification: null,
};
const cartSlice = createSlice({
  name: "cartbutton",
  initialState,
  reducers: {
    changeToggle(state) {
      state.isToggle = !state.isToggle;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const cartButtonActions = cartSlice.actions;
export default cartSlice.reducer;
