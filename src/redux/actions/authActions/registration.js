import * as authTypes from "../../types/authTypes";

const registerUser = user => ({
  type: authTypes.REGISTER_USER,
  payload: user.data,
  loading: false
});

const authErrors = error => ({
  type: authTypes.AUTH_FAILURE,
  error
});

const loginUser = data => ({
  type: authTypes.LOGIN_USER,
  payload: data,
  loading: false
});

const registrationStates = filter => ({
  type: authTypes.REGISTRATION_STATES,
  filter
});

export { registerUser, loginUser, registrationStates, authErrors };
