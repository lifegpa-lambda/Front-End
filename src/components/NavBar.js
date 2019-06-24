import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const NavBar = () => {
  return (
    <div className="nav-bar container">
      <div className="row">
        <div className="col">
          <Link className="nav-link" to="/login">
            Log In
          </Link>
        </div>
        <div className="col">
          <Link className="nav-link" to="/habits">
            Habits
          </Link>
        </div>
        <div className="col">
          <Link className="nav-link" to="/daily">
            Daily
          </Link>
        </div>
        <div className="col">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </div>
        <div className="col">
          <Link className="nav-link" to="/dharma">
            Dharma
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
