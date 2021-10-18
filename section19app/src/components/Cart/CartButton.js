import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';


import { cartButtonActions } from '../../store/cartButton';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const changeToggleButton=()=>{
    dispatch(cartButtonActions.changeToggle())
  }
  return (
    <button className={classes.button} onClick={changeToggleButton}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
