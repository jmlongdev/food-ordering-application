import { useState } from "react";
import classes from "../Cart/Checkout.module.css";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  const inputErrorClasses = `${classes.control} ${
    hasError ? classes.invalid : ""
  }`;

  const paraErrorClass = `${classes.invalidPar}`;

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    setIsTouched,
    reset,
    inputErrorClasses,
    paraErrorClass,
  };
};

export default useInput;
