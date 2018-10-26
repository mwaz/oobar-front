import * as authActions from "../types/authTypes";

export default function cars(state = {}, action) {
  switch (action.type) {
    case authActions.REGISTER_USER:
      return action.user;
    default:
      return state;
  }
}
