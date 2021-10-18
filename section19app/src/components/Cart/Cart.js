import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { cartActions } from '../../store/cartButton';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
const isToggle = useSelector(state => state.cartbutton.isToggle)
const listItems = useSelector(state => state.cart.listItems)
  return (
    <Fragment>
      {isToggle && <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>

        <ul>
        {listItems.map((item)=>{
          const total=Number(item.price) * Number(item.quantity);

          return (
            <CartItem
              key={item.id}
              item={{ id:item.id,title: item.title, quantity: item.quantity, total: item.totalPrice, price: item.price }}
            />
          )
        })}
       </ul>
      </Card>}
    </Fragment>
  );
};

export default Cart;
