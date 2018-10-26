import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { App } from "./App";
import ooberApp from "./redux/reducers";
import { Provider } from "react-redux";

 /* eslint-disable no-underscore-dangle */
const store = createStore(
  ooberApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
