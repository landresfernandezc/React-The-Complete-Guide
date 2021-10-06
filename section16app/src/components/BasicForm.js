import useBasicInput from "../hooks/use-binput";

const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    hasError: firstNameHasError,
    valueBlurHandler: firstNameBlurHandler,
    valueChangeHandler: firstNameChangeHandler,
    resetValue: resetFirstName,
    valueIsValid:firstNameIsValid
  } = useBasicInput(value => value.trim() !== '');
  const {
    enteredValue: enteredLastName,
    hasError: lastNameHasError,
    valueBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangeHandler,
    resetValue: resetLastName,
    valueIsValid:lastNameIsValid
  } = useBasicInput(value => value.trim() !== '');


  const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const {
    enteredValue: enteredEmail,
    hasError: emailHasError,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    resetValue: resetEmail,
    valueIsValid:emailIsValid
  } = useBasicInput(value => value.match(emailformat));
  const firstNameInputClass= firstNameHasError ?
        'form-control invalid':'form-control';
  const lastNameInputClass= lastNameHasError ?
  'form-control invalid':'form-control';
  const emailInputClass= emailHasError ?
  'form-control invalid':'form-control';
  let formIsvalid=false;
  if(firstNameIsValid && lastNameIsValid && emailIsValid){
    formIsvalid=true;
  }

  const submitHandler=()=>{
    console.log({
      enteredEmail,
      enteredFirstName,
      enteredLastName
    })
    resetFirstName();
    resetLastName();
    resetEmail();
  }
  return (
    <form onSubmit={ submitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClass}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={firstNameChangeHandler}
            value={enteredFirstName}
            onBlur={firstNameBlurHandler} />


        </div>
        <div className={lastNameInputClass}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={lastNameChangeHandler}
            value={enteredLastName}
            onBlur={lastNameBlurHandler} />
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text'
          id='name'
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler} />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsvalid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
