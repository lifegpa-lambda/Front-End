import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <div className="App">
        <ul className="links">
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/habits">Habits</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        {/* <PrivateRoute exact path="/habits" component={HabitList} /> */}
      </div>
    </Router>
  );
};

export default App;
