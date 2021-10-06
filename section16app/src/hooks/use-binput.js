import { useState } from "react/cjs/react.development"

const useBasicInput=(validateValue)=>{
    const [enteredValue,setEnteredValue]=useState('');
    const [isTouched,setIsTouched]=useState(false);
    const valueIsValid=validateValue(enteredValue);
    const hasError=!valueIsValid && isTouched;

    const valueChangeHandler=(event)=>{
        setEnteredValue(event.target.value)
    }
    const valueBlurHandler=(event)=>{
        setIsTouched(true);
    }
    const resetValue=()=>{
        setIsTouched(false);
        setEnteredValue('');
    }
    return{
        enteredValue,
        hasError,
        valueBlurHandler,
        valueChangeHandler,
        resetValue,
        valueIsValid
    }

}
export default useBasicInput;