import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>,
  document.getElementById("root")
);
