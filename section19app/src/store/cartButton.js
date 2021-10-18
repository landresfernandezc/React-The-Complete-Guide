import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isToggle:false
}
const cartSlice=createSlice({
    name:'cartbutton',
    initialState,
    reducers:{
        changeToggle(state){
            state.isToggle=!state.isToggle
        }
    }
})
export const cartButtonActions=cartSlice.actions;
export default cartSlice.reducer;