import { useRef, useState } from 'react';
import classes from './Checkout.module.css';


const isEmpty = value=>value.trim()==='';
const isFiveChars = value => value.trim().lenght !== 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
      name:true,
      street:true,
      postalcode:true,
      city:true
  })
  const nameInputRef=useRef();
  const streetInputRef=useRef();
  const postalCodeInputRef=useRef();
  const cityInputRef=useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName= nameInputRef.current.value;
    const enteredSreet= streetInputRef.current.value;
    const enteredPostalCode= postalCodeInputRef.current.value;
    const enteredCity= cityInputRef.current.value;

    const enteredNameIsvalid=!isEmpty(enteredName);
    const enteredStreetIsvalid=!isEmpty(enteredSreet);
    const enteredPostCodeIsvalid=isFiveChars(enteredPostalCode);
    const enteredCityIsvalid=!isEmpty(enteredCity);

    const formInputsValidity=setFormInputsValidity(
        {
            name:enteredNameIsvalid,
            street:enteredStreetIsvalid,
            postalcode:enteredPostCodeIsvalid,
            city:enteredCityIsvalid
        }
    );
    const formIsValid=enteredNameIsvalid && enteredStreetIsvalid && enteredPostCodeIsvalid && enteredCityIsvalid;
    if(!formIsValid){
        return;
    }
    props.onConfirm({
        name:enteredName,
        street:enteredSreet,
        postalcode:enteredPostalCode,
        city:enteredCity
    })
  };
  const nameControlClasses=`${classes.control} ${formInputsValidity.name ? '':classes.invalid}`;
  const streetControlClases=`${classes.control} ${formInputsValidity.street ? '':classes.invalid}`;
  const postalcodeControlClases=`${classes.control} ${formInputsValidity.postalcode ? '':classes.invalid}`;
  const cityControlClases=`${classes.control} ${formInputsValidity.city ? '':classes.invalid}`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formInputsValidity.name && (<p>Please enter a valid name</p>)}
      </div>
      <div className={streetControlClases}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!formInputsValidity.street && (<p>Please enter a valid street</p>)}
      </div>
      <div className={postalcodeControlClases}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef}/>
        {!formInputsValidity.postalcode && (<p>Please enter a valid postalcode 5 characters long</p>)}
      </div>
      <div className={cityControlClases}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
        {!formInputsValidity.city && (<p>Please enter a valid city</p>)}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;