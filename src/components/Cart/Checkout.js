import React from "react";

import useInput from "../hooks/order-input";
import classes from "./Checkout.module.css";

//validation to use in the cusotm hook
const isNotEmpty = (value) => value.trim() !== "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  //Name
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    setIsTouched: setNameTouched,
    reset: resetName,
    inputErrorClasses: nameControlClasses,
    paraErrorClass: nameParagraphErr,
  } = useInput((value) => value.trim() !== "");
  //Street
  const {
    value: enteredStreet,
    isValid: enteredStreetIsValid,
    hasError: streetInputError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    setIsTouched: setStreetTouched,
    reset: resetStreet,
    inputErrorClasses: streetControlClasses,
    paraErrorClass: streetParagraphErr,
  } = useInput(isNotEmpty);
  // City
  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityInputError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    setIsTouched: setCityTouched,
    reset: resetCity,
    inputErrorClasses: cityControlClasses,
    paraErrorClass: cityParagraphErr,
  } = useInput(isNotEmpty);
  // Postal Code
  const {
    value: enteredPostalCode,
    isValid: enteredPostalCodeIsValid,
    hasError: postalCodeInputError,
    valueChangeHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
    setIsTouched: setPostalCodeTouched,
    reset: resetPostalCode,
    inputErrorClasses: postalCodeControlClasses,
    paraErrorClass: postalCodeParagraphErr,
  } = useInput(isFiveChars);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredStreetIsValid &&
    enteredCityIsValid &&
    enteredPostalCodeIsValid
  ) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);
    setCityTouched(true);
    setPostalCodeTouched(true);
    setStreetTouched(true);
    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });

    resetName();
    resetCity();
    resetStreet();
    resetPostalCode();
  };

  return (
    <form className={classes} onSubmit={submitFormHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputError && (
          <p className={nameParagraphErr}>Please enter a valid name</p>
        )}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          value={enteredStreet}
        />
        {streetInputError && (
          <p className={streetParagraphErr}>
            Please enter a valid street address
          </p>
        )}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onChange={postalCodeChangeHandler}
          onBlue={postalCodeBlurHandler}
          value={enteredPostalCode}
        />
        {postalCodeInputError && (
          <p className={postalCodeParagraphErr}>
            Please enter a valid Zip Code
          </p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={enteredCity}
        />
        {cityInputError && (
          <p className={cityParagraphErr}>Please enter a valid City</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
