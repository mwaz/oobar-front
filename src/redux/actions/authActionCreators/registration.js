import {
  registerUser,
  loginUser,
  authErrors
} from "../authActions/registration";
import axiosInstance from "../../../apiCalls/axiosInstance";
// import { push } from "react-router-redux";

const userRegistration = data => {
  return dispatch => {
    axiosInstance
      .post("auth/signup/", data)
      .then(response => {
        if (response) {
          dispatch(registerUser(response));
        }
      })
      .catch(error => {
        dispatch(authErrors(error));
      });
  };
};

const userLogin = data => {
  return dispatch => {
    axiosInstance
      .post("auth/login/", data)
      .then(response => {
        if (response) {
          dispatch(loginUser(response));
          localStorage.token = response.data.token;
          localStorage.username = response.data.user.username;
        }
      })
      .catch(error => {
        dispatch(authErrors(error));
      });
  };
};

export { userRegistration, userLogin };
