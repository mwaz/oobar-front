import * as authTypes from "../../types/authTypes";

export const registerUser = user => ({
  type: authTypes.REGISTER_USER,
  user
});

export const registrationStates = filter => ({
  type: authTypes.REGISTRATION_STATES,
  filter
});

