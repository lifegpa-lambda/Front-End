import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import "./";
import Login from "./components/Login";
import Signout from "./components/Signout";
import CreateAccount from "./components/CreateAccount";
import PrivateRoute from "./components/PrivateRoute";
import HabitList from "./components/HabitList";
import NavBar from "./components/NavBar";
import DailyList from "./components/DailyList";
import Dashboard from "./components/Dashboard";
import DharmaList from "./components/DharmaList";
import GaugesTest from "./tests/GaugesTest";

const App = props => {
  console.log("App props", props);
  if (props.location.pathname === "/") {
    return <Redirect to="/login" />;
  }
  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* <Route exact path ="/"  */}
        <Route path="/login" component={Login} />
        <Route path="/signout" component={Signout} />
        <Route path="/create" component={CreateAccount} />
        <Route exact path="/gaugestest" component={GaugesTest} />
        <PrivateRoute exact path="/habits" component={HabitList} />
        <PrivateRoute exact path="/daily" component={DailyList} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/dharma" component={DharmaList} />
      </div>
    </Router>
  );
};

export default App;
