import {
  registerUser,
  loginUser,
  authErrors
} from "../authActions/registration";
import axiosInstance from "../../../apiCalls/axiosInstance";

const userRegistration = data => {
  return async dispatch => {
    try {
      const axiosRes = await axiosInstance.post("auth/signup/", data);
      dispatch(registerUser(axiosRes));
    } catch (error) {
      dispatch(authErrors(error.response.data.message));
    }
  };
};

const userLogin = data => {
  return async dispatch => {
    try {
      const axiosRes = await axiosInstance.post("auth/login/", data);
      const loginRes = await dispatch(loginUser(axiosRes));
      if (loginRes) {
        localStorage.token = axiosRes.data.token;
        localStorage.username = axiosRes.data.user.username;
      }
    } catch (error) {
      dispatch(authErrors(error.response.data.message));
    }
  };
};

export { userRegistration, userLogin };
