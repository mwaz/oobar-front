import React from "react";
import "./styles/index.css";
import "./styles/App.css";
import "./styles/cars.css"
import { Switch, Route } from "react-router-dom";

import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Cars from "./components/Cars/Dashboard";

// ReactDOM.render(<Signup />, document.getElementById("root"));

export const App = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/dashboard" exact component={Cars} />
  </Switch>
);
