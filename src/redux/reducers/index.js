import { combineReducers } from "redux";
import userReducers from "./userReducers";

const ooberApp = combineReducers({
  users: userReducers
});

export default ooberApp;
