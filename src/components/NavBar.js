import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/login">Log In</Link>
        </div>
        <div className="col">
          <Link to="/habits">Habits</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
