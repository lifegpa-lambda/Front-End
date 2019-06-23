import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import HabitList from "./components/HabitList";
import NavBar from "./components/NavBar";
import DailyList from "./components/DailyList";
import Dashboard from "./components/Dashboard";
import DharmaCard from "./components/DharmaCard";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/habits" component={HabitList} />
        <PrivateRoute exact path="/daily" component={DailyList} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/dharma" component={DharmaCard} />
      </div>
    </Router>
  );
};

export default App;
