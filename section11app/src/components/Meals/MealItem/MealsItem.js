import { useContext } from 'react';
import classes from './MealsItem.module.css';
import MealItemForm from './MealsItemForm';
import CartContext from '../../../assets/store/cart-context';
const MealsItem =(props)=>{
    const price=`$${props.price.toFixed(2)}`
    const cartCtx=useContext(CartContext)
    const addToCartHandler=amount=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    }
    return ( 
    <li  className={classes.meal}>
        <h3 className={classes["meal h3"]}>{props.name}</h3>
        <div className={classes.description}>
            {props.description}
        </div>
        <div className={classes.price}>{price}</div>
        <div>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler}></MealItemForm>
        </div>
    </li>)
}
export default MealsItem;