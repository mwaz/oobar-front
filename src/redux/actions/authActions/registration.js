import * as authTypes from "../../types/authTypes";

const registerUser = user => ({
  type: authTypes.REGISTER_USER,
  user
});

const registrationErrors = error => ({
  type: authTypes.FAILED_REGISTRATION,
  error
});

const loginUser = data => ({
  type: authTypes.LOGIN_USER,
  data
});

const registrationStates = filter => ({
  type: authTypes.REGISTRATION_STATES,
  filter
});

export { registerUser, loginUser, registrationStates, registrationErrors };
