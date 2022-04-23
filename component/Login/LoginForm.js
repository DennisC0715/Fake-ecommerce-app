import { useState, useRef } from "react";
import classes from "./LoginForm.module.css";

const Login = () => {
 
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

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

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            required
            ref={emailInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            placeholder="Enter your password"
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Loading....</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};
export default Login;
