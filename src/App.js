import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import HabitList from "./components/HabitList";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/habits" component={HabitList} />
      </div>
    </Router>
  );
};

export default App;
