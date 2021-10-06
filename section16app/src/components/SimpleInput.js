import React from 'react';
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {value:enteredName,
    hasError:nameInputHasError,
    valueInputChangeHandler:nameInputChangeHandler,
    valueInputBlurHandler:  nameInputBlurHandler,
    isValid: enteredNameIsValid,
    reset:nameInputReset
  }=useInput(value=>value.trim() !== '');

  const  emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const {value:enteredEmail,
    hasError:emailInputHasError,
    valueInputChangeHandler:emailInputChangeHandler,
    valueInputBlurHandler:  emailInputBlurHandler,
    isValid: enteredEmailIsValid,
    reset:emailInputReset
  }=useInput(value=>value.match(emailformat));

  //const [enteredName, setEnteredName] = useState('');
  //const [enteredEmail, setEnteredEmail] = useState('');
  //const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  //const nameInputRef = useRef();
  //const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  let formIsvalid=false;
  //const enteredNameIsValid=enteredName.trim() !== ''; 
  //const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  // const  mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // const enteredEmailIsValid=enteredEmail.trim() !== '' ; 
  // const emailFormatIsInvalid=!enteredEmail.match(mailformat) && enteredNameTouched;
  // const emailInputIsInvalid = !enteredEmailIsValid && enteredNameTouched;
  if(enteredNameIsValid && enteredEmailIsValid){
    formIsvalid=true;
  }else{
    formIsvalid=false;
  }
  // const nameInputChangeHandler = event => {
  //   setEnteredName(event.target.value);
  // };
  // const nameInputBlurHandler= event =>{
  //   setEnteredNameTouched(true);
  // }
  // const emailInputChangeHandler = event => {
  //   // setEnteredEmail(event.target.value);
  // };
  // const emailInputBlurHandler= event =>{
  //   // setEnteredNameTouched(true);
  // }
  const formSubmissionHandler = event => {
    event.preventDefault();
    // setEnteredNameTouched(true);
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName)
    nameInputReset();
    emailInputReset();
    //const enteredValue = nameInputRef.current.value;
    //nameInputRef.curren.value='' It's not ideal manipulate de DOM 
    // setEnteredName('');
    // setEnteredEmail('');
    // setEnteredNameTouched(false);
    
  };
  const nameInputClasses = nameInputHasError 
    ? 'form-control invalid'
    : 'form-control';
    const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        //ref={nameInputRef} 
        type='text' 
        id='name' 
        onChange={nameInputChangeHandler} 
        onBlur={nameInputBlurHandler}
        value={enteredName} />

        {nameInputHasError && (<p className="error-text">Name not must be empty</p>)}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input 
        //ref={nameInputRef} 
        type='email' 
        id='email' 
        onChange={emailInputChangeHandler} 
        onBlur={emailInputBlurHandler}
        value={enteredEmail} />
        {emailInputHasError && (<p className="error-text">Email not have right format  loquese@loquesea.loquesea</p>)}
      </div>
      <div className="form-actions">
        <button disabled={!formIsvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
