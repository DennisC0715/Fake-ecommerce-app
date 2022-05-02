import { useState } from "react";
import classes from "./SignupForm.module.css";
import useLogin from "./login-hook";

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  ////////////////////////////////////Email//////////////////////////////////
  const {
    value: enteredEmail,
    isValidInput: isValidEmailInput,
    enteredValueIsValid: enteredEmailIsValid,
    valueIsEmpty: emailIsEmpty,
    changeValueHandler: changeEmailHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useLogin(
    (value) => value.trim() === "",
    (value) => value.includes("@")
  );
  const emailErrorMessage = emailIsEmpty
    ? "Please enter your email"
    : "Please Enter Valid Email";

  ////////////////////////////////////Password//////////////////////////////////
  const {
    value: enteredPassword,
    isValidInput: isValidPasswordInput,
    enteredValueIsValid: enteredPasswordIsValid,
    valueIsEmpty: passwordIsEmpty,
    changeValueHandler: changePassowrdHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useLogin(
    (value) => value.trim() === "",
    (value) => value.trim().length > 6
  );
  const passwordErrorMessage = passwordIsEmpty
    ? "Please enter your password"
    : "Passowrd must be 6 digits or more";

  ////////////////////////////////////First Name//////////////////////////////////
  const {
    value: enteredFirstName,
    isValidInput: isValidFirstNameInput,
    enteredValueIsValid: enteredFirstNameIsValid,
    valueIsEmpty: firstNameIsEmpty,
    changeValueHandler: changeFirstNameHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useLogin(
    (value) => value.trim() === "",
    (value) => value.trim().length > 0
  );
  const firstNameErrorMessage = firstNameIsEmpty
    ? "Please enter your first name"
    : "";

  ////////////////////////////////////Last Name//////////////////////////////////
  const {
    value: enteredLastName,
    isValidInput: isValidLastNameInput,
    enteredValueIsValid: enteredLastNameIsValid,
    valueIsEmpty: lastNameIsEmpty,
    changeValueHandler: changeLastNameHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useLogin(
    (value) => value.trim() === "",
    (value) => value.trim().length > 0
  );
  const lastNameErrorMessage = lastNameIsEmpty
    ? "Please enter your last name"
    : "";
  ////////////////////////////////////ADDRESS//////////////////////////////////
  const {
    value: enteredAddress,
    isValidInput: isValidAddressInput,
    enteredValueIsValid: enteredAddressIsValid,
    valueIsEmpty: addressIsEmpty,
    changeValueHandler: changeAddressHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useLogin(
    (value) => value.trim() === "",
    (value) => value.trim().length > 0
  );
  const addressErrorMessage = addressIsEmpty
    ? "Please enter your address"
    : "Passowrd must be 6 digits or more";

  ////////////////////////////////////city//////////////////////////////////
  const {
    value: enteredCity,
    isValidInput: isValidCityInput,
    enteredValueIsValid: enteredCityIsValid,
    valueIsEmpty: cityIsEmpty,
    changeValueHandler: changeCityHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useLogin(
    (value) => value.trim() === "",
    (value) => value.trim().length > 0
  );
  const cityErrorMessage = cityIsEmpty
    ? "Please enter your address"
    : "Passowrd must be 6 digits or more";

  ////////////////////////////////////post code//////////////////////////////////
  const {
    value: enteredPostalCode,
    isValidInput: isValidPostalCodeInput,
    enteredValueIsValid: enteredPostalCodeIsValid,
    valueIsEmpty: postalCodeIsEmpty,
    changeValueHandler: changePostalCodeHandler,
    inputBlurHandler: postalCodeBlurHandler,
    reset: resetPostalCode,
  } = useLogin(
    (value) => value.trim() === "",
    (value) => value.trim().length > 0
  );
  const postalCodeErrorMessage = postalCodeIsEmpty
    ? "Please enter your address"
    : "Passowrd must be 6 digits or more";

  const submitSignupHandler = (event) => {
    event.preventDefault();

    emailBlurHandler();
    passwordBlurHandler();
    firstNameBlurHandler();
    lastNameBlurHandler();
    addressBlurHandler();
    cityBlurHandler();
    postalCodeBlurHandler();

    if (
      !enteredEmailIsValid ||
      emailIsEmpty ||
      !enteredPasswordIsValid ||
      passwordIsEmpty ||
      !enteredFirstNameIsValid ||
      firstNameIsEmpty ||
      !enteredLastNameIsValid ||
      lastNameIsEmpty ||
      !enteredAddressIsValid ||
      addressIsEmpty ||
      !enteredCityIsValid ||
      cityIsEmpty ||
      !enteredPostalCodeIsValid ||
      postalCodeIsEmpty
    ) {
      return;
    }

    resetEmail();
    resetPassword();
    resetFirstName();
    resetLastName();
    resetAddress();
    resetCity();
    resetPostalCode();
  };

  return (
    <section className={classes.auth}>
      <h1>Sign Up</h1>
      <form onSubmit={submitSignupHandler}>
        {/* //////////////////////////////////////Email//////////////////////////////////// */}
        <div className={classes.divcontainer}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="signupemail"
              placeholder="Enter your email address"
              onChange={changeEmailHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
            />
            {isValidEmailInput && <p>{emailErrorMessage}</p>}
          </div>
          {/* //////////////////////////////////////PASSWORD//////////////////////////////////// */}
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              placeholder="Enter your password"
              type="password"
              id="signuppassword"
              value={enteredPassword}
              onChange={changePassowrdHandler}
              onBlur={passwordBlurHandler}
            />
            {isValidPasswordInput && <p>{passwordErrorMessage}</p>}
          </div>
        </div>
        {/* //////////////////////////////////////FirstName//////////////////////////////////// */}
        <div className={classes.divcontainer}>
          <div className={classes.control}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              onChange={changeFirstNameHandler}
              onBlur={firstNameBlurHandler}
              value={enteredFirstName}
            />
            {isValidFirstNameInput && <p>{firstNameErrorMessage}</p>}
          </div>
          {/* //////////////////////////////////////LastName//////////////////////////////////// */}
          <div className={classes.control}>
            <label htmlFor="lasttName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              onChange={changeLastNameHandler}
              onBlur={lastNameBlurHandler}
              value={enteredLastName}
            />
            {isValidLastNameInput && <p>{lastNameErrorMessage}</p>}
          </div>
        </div>
        {/* //////////////////////////////////////ADDRESS//////////////////////////////////// */}
        <div className={classes.control3}>
          <label htmlFor="Address">Address</label>
          <input
            type="Address"
            id="Address"
            placeholder="Enter your address"
            onChange={changeAddressHandler}
            onBlur={addressBlurHandler}
            value={enteredAddress}
          />
          {isValidAddressInput && <p>{addressErrorMessage}</p>}
        </div>
        {/* //////////////////////////////////////CITY//////////////////////////////////// */}
        <div className={classes.divcontainer2}>
          <div className={classes.control2}>
            <label htmlFor="City">City</label>
            <input
              type="City"
              id="City"
              placeholder="Enter your City"
              value={enteredCity}
              onChange={changeCityHandler}
              onBlur={cityBlurHandler}
            />
            {isValidCityInput && <p>{cityErrorMessage}</p>}
          </div>
          {/* //////////////////////////////////////Province//////////////////////////////////// */}
          <div className={classes.control2}>
            <label htmlFor="Province">Province</label>
            <select id="province">
              <option>Plase select one</option>
              <option>Alberta</option>
              <option>British Columbia</option>
              <option>Manitoba</option>
              <option>New Brunswick</option>
              <option>Newfoundland and Labrador</option>
              <option>Nova Scotia</option>
              <option>Ontario</option>
              <option>Prince Edward Island</option>
              <option>Quebec</option>
              <option>Saskatchewan</option>
            </select>
          </div>
          {/* //////////////////////////////////////Postal Code//////////////////////////////////// */}
          <div className={classes.control2}>
            <label htmlFor="Postal Code">Postal Code</label>
            <input
              placeholder="Enter Postal Code"
              type="Postal Code"
              id="Postal Code"
              value={enteredPostalCode}
              onChange={changePostalCodeHandler}
              onBlur={postalCodeBlurHandler}
            />
            {isValidPostalCodeInput && <p>{postalCodeErrorMessage}</p>}
          </div>
        </div>
        <div className={classes.actions}>
          <button>Create Account</button>
          {isLoading && <p>Loading....</p>}
        </div>
      </form>
    </section>
  );
};
export default SignupForm;

// const submitAuthHandler = (event) => {
//   event.preventDefault();

//   const enteredEmail = emailInputRef.current.value;
//   const enteredPassword = passwordInputRef.current.value;
//   setIsLoading(true);

//   let url;

//   if (isLogin) {
//     url =
//       "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBIIQyUbN1-1PG5jIeHk-SwU1yeUzEmj78";
//   } else {
//     url =
//       "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBIIQyUbN1-1PG5jIeHk-SwU1yeUzEmj78";
//   }
//   fetch(url, {
//     method: "POST",
//     body: JSON.stringify({
//       email: enteredEmail,
//       password: enteredPassword,
//       returnSecureToken: true,
//     }),
//     headers: {
//       "Content-Type": "applicatiuon/json",
//     },
//   })
//     .then((res) => {
//       setIsLoading(false);
//       if (res.ok) {
//         return res.json();
//       } else {
//         res.json().then((data) => {
//           let errorMessage = "Authentication failed!";
//           throw new Error(errorMessage);
//         });
//       }
//     })
//     .then((data) => {
//       const expirationTime = new Date(
//         new Date().getTime() + +data.expiresIn * 1000
//       );
//       context.login(data.idToken, expirationTime.toISOString());
//       history.replace("/");
//     })
//     .catch((error) => {
//       alert(error.message);
//     });
// };
