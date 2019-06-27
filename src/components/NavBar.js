import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const NavBar = props => {
  // console.log(props);
  return (
    <div className="nav-bar container">
      {props.loggedIn ? (
        <NavLink className="nav-link" to="/signout">
          <div className="col nav-col">Sign Out</div>
        </NavLink>
      ) : (
        <NavLink className="nav-link" to="/login">
          <div className="col nav-col">Log In</div>
        </NavLink>
      )}

      <NavLink className="nav-link" to="/habits">
        <div className="col nav-col">Habits</div>
      </NavLink>

      <NavLink className="nav-link" to="/daily">
        <div className="col nav-col">Daily</div>
      </NavLink>

      <NavLink className="nav-link" to="/dashboard">
        <div className="col nav-col">Dashboard</div>
      </NavLink>

      <NavLink className="nav-link" to="/dharma">
        <div className="col nav-col">Dharma</div>
      </NavLink>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.user.token
});

export default connect(
  mapStateToProps,
  {}
)(NavBar);
