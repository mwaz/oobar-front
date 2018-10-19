import React from "react";
import "./styles/index.css";
import "./styles/App.css";
import { BrowserRouter as Route, Switch } from "react-router-dom";

import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

// ReactDOM.render(<Signup />, document.getElementById("root"));

export const App = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
  </Switch>
);
