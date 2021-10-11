import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import counterReducer from './counter';


const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
// const counterReducer=(state=initialState,action) =>{
//     if(action.type=== INCREMENT){
//         return {
//             counter:state.counter + 1,
//             showCounter:state.showCounter
//         };
//     }
//     if(action.type=== DECREMENT){
//         return {
//             counter:state.counter - 1,
//             showCounter:state.showCounter
//         };
//     }
//     if(action.type=== INCREASE){
//         return {
//             counter:state.counter + action.amount,
//             showCounter:state.showCounter
//         };
//     }
//     if(action.type=== TOGGLE){
//         return {
//             counter:state.counter,
//             showCounter:!state.showCounter
//         };
//     }
//     return state;
// }
//const store=createStore(counterReducer);
// Actions created behind scenes counterSlice.actions.increment

