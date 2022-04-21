import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

const initialState = {
  isOnLoginPage: false,
  isLoading: false,
  isAuthenticated: false,
  emailIsValid: false,
  passwordIsValid: false,
  formIsValid: false,
  enteredEmail: "",
  enteredPassword: "",
};

const loginSlice = createSlice({
  name: "LoginSlice",
  initialState: initialState,
  reducers: {
    setOnloginPage(state) {
      state.isOnLoginPage = ture;
    },
    setIsAuthenticated(state) {
      state.isAuthenticated = ture;
    },
    formIsValid() {},
  },
});

const store = configureStore({ reducer: { login: loginSlice.reducer } });

export const LoginAction = loginSlice.actions;

export default store;
