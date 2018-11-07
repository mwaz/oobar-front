import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { App } from "./App";
import ooberApp from "./redux/reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

/* eslint-disable no-underscore-dangle */
const store = createStore(
  ooberApp,
  composeWithDevTools(applyMiddleware(thunk))
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
