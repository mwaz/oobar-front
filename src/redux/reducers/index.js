import { combineReducers } from "redux";
import userReducers from "./userReducers";
import carReducers from "./carReducers"

const ooberApp = combineReducers({
  users: userReducers,
  cars: carReducers
});

export default ooberApp;
