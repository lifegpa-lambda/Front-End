import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Nav.css";

const NavBar = props => {
  console.log(props);
  return (
    <div className="nav-bar container">
      <div className="row nav-row">
        <div className="col nav-col">
          {props.loggedIn ? (
            <Link className="nav-link" to="/signout">
              Sign Out
            </Link>
          ) : (
            <Link className="nav-link" to="/login">
              Log In
            </Link>
          )}
        </div>
        <div className="col nav-col">
          <Link className="nav-link" to="/habits">
            Habits
          </Link>
        </div>
        <div className="col nav-col">
          <Link className="nav-link" to="/daily">
            Daily
          </Link>
        </div>
        <div className="col nav-col">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </div>
        <div className="col nav-col">
          <Link className="nav-link" to="/dharma">
            Dharma
          </Link>
        </div>
      </div>
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
