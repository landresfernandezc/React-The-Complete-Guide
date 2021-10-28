import { cartActions } from './cart';
import { cartButtonActions } from './cartButton';
export const sentCartData= (cart)=> {
    return async (dispatch)=>{
      dispatch(
        cartButtonActions.showNotification({
          status: "Pending...",
          title: "Sending...",
          message: "Sending cart Data!",
        })
      );
  
      const sendRequest= async ()=>{
        const response = await fetch(
          "https://quickstart-1578065435838-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify({
                items: cart.items,
                totalQuantity: cart.totalQuantity,
            }),
          }
        );
        if (!response.ok) {
          throw new Error("Sending data failed!");
        }
      }
      try{
        await sendRequest();
      dispatch(
        cartButtonActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart Data succesfully!",
        })
      );
      }catch(error){
        dispatch(
          cartButtonActions.showNotification({
            status: "error",
            title: "Error",
            message: error,
          })
        );
      }
      
    }
   
  }

  export const fetchCartData= ()=>{
     return async dispatch => {
         const fetchData = async () => {
            const response = await fetch('https://quickstart-1578065435838-default-rtdb.firebaseio.com/cart.json');
            if(!response.ok){
                throw new Error("Could not fetch cart data!")
            }
            const data= await response.json();
            return data;
         }
         try {
             const cartData= await fetchData();
             dispatch(cartActions.replaceCart({
                 items:cartData.items || [],
                 totalQuantity:cartData.totalQuantity
             }));
         } catch (error) {
            dispatch(
                cartButtonActions.showNotification({
                  status: "error",
                  title: "Error",
                  message: error,
                })
              );
         }
     } 
  }