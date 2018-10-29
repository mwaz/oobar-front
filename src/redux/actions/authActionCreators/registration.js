import {
  registerUser,
  loginUser,
  registrationErrors
} from "../authActions/registration";
import axiosInstance from "../../../apiCalls/axiosInstance";

const userRegistration = (data, history) => {
  return dispatch => {
    axiosInstance
      .post("auth/signup/", data)
      .then(response => {
        if (response) {
          dispatch(registerUser(response));
          history.push("/login");
        }
      })
      .catch(error => {
        dispatch(registrationErrors(error));
      });
  };
};

const userLogin = data => {
  return dispatch => {
    axiosInstance.post("auth/login/", data).then(response => {
      if (response) {
        dispatch(loginUser(response));
      }
    });
  };
};

export { userRegistration, userLogin };
