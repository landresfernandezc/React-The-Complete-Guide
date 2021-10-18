import { configureStore } from "@reduxjs/toolkit";
import cartButtonReducer from './cartButton';
import cartReducer from './cart';
const store =configureStore({
    reducer:{cart:cartReducer,cartbutton:cartButtonReducer}
})
export default store;