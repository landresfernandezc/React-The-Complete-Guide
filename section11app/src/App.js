import { useState} from "react";
import CartProvider from "./assets/store/CartProvider";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  const [cartIsShow,setCartIsShow]=useState(false);

  const showCartHanldler=()=>{
    setCartIsShow(true);
  };
  const hideCartHandler=()=>{
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHanldler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
