import * as authActions from "../types/authTypes";

const initialState = {
  users: {}
};
export default function cars(state = initialState, action) {
  switch (action.type) {
    case authActions.REGISTER_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        redirect: true,
      };
    case authActions.AUTH_FAILURE:
      return {
        error: action.error,
      };
    case authActions.LOGIN_USER:
      return {
        ...state,
        user: action.data,
        loggedIn: true,
        loading: false,
      };
    default:
      return state;
  }
}
