import { useState } from "react";
import classes from "./LoginForm.module.css";
import useLogin from "./login-hook";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  //////////////////////for email input//////////////////////////////////////////////////
  const {
    value: enteredEmail,
    isValidInput: isValidEmailInput,
    enteredValueIsValid: enteredEmailIsValid,
    valueIsEmpty: emailIsEmpty,
    changeValueHandler: changeEmailHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useLogin(
    (value) => value.trim() === "",
    (value) => value.includes("@")
  );
  const emailErrorText = emailIsEmpty
    ? "Please Enter your email"
    : "Please Enter Valid Email";

  ////////////////////for password input/////////////////////////////////////////////////
  const {
    value: enteredPassword,
    isValidInput: isValidPasswordInput,
    enteredValueIsValid: enteredPasswordIsValid,
    valueIsEmpty: passwordIsEmpty,
    changeValueHandler: changePasswordHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useLogin(
    (value) => value.trim() === "",
    (value) => value.trim().length > 6
  );
  const passwordErrorText = passwordIsEmpty
    ? "Please enter your password"
    : "Password must be 6 digits or more";

  const submitAuthHandler = (event) => {
    event.preventDefault();

    //set isTouch to true
    emailBlurHandler();
    passwordBlurHandler();
    //valiated the Input
    if (
      !enteredPasswordIsValid ||
      passwordIsEmpty ||
      !enteredEmailIsValid ||
      emailIsEmpty
    ) {
      return;
    }

    //reset Inputs
    resetEmailInput();
    resetPasswordInput();
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitAuthHandler}>
        {/* ///////////////////////////Email///////////////////////////// */}
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={enteredEmail}
            onChange={changeEmailHandler}
            onBlur={emailBlurHandler}
          />
          {isValidEmailInput && <p>{emailErrorText}</p>}
        </div>
        {/* ///////////////////////////password///////////////////////////// */}
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            placeholder="Enter your password"
            type="password"
            id="password"
            value={enteredPassword}
            onChange={changePasswordHandler}
            onBlur={passwordBlurHandler}
          />
          {isValidPasswordInput && <p>{passwordErrorText}</p>}
        </div>
        <div className={classes.actions}>
          <button>Login</button>
          {isLoading && <p>Loading....</p>}
        </div>
      </form>
    </section>
  );
};
export default LoginForm;

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
