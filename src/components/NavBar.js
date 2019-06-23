import React from "react";
import { Link } from "react-router-dom";

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
      </div>
    </div>
  );
};

export default NavBar;
