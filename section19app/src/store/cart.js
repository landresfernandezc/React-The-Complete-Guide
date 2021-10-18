import { createSlice } from "@reduxjs/toolkit";
const initialState={
    listItems:[],
    totalQuantity:0
}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItemToCart(state,action){
            const newItem= action.payload;
            const existingItem= state.listItems.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice= existingItem.totalPrice+newItem.price;
            }else{

                state.listItems.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity:1,
                    totalPrice: newItem.price,
                    title: newItem.title,
                    name: newItem.title
                })
            }
        },
        removeItemFromCart(state,action){
            const id=action.payload;
            const existingItem=state.listItems.find(item=>item.id ===id);
            state.totalQuantity--;
            if(existingItem.quantity === 1){
                state.listItems=state.listItems.filter((item)=>item.id !==id);
            }else{
                existingItem.quantity--;
            }
        }
    }
})
export const cartActions=cartSlice.actions;
export default cartSlice.reducer;