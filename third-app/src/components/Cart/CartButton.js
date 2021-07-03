import {useDispatch, useSelector} from 'react-redux';
import classes from './CartButton.module.css';
import {uiActions} from '../../store/ui-slice.js';
const CartButton = (props) => {
  const dispath=useDispatch()
  const cartQuantity=useSelector(state=>state.cart.totalQuantity);
  const toggleCardHandler=()=>{
      dispath(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={toggleCardHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
