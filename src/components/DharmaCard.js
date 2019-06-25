import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { getHabits } from "../actions/habitActions";
import Gauge from "./Gauge";
import "../App.css";

class DharmaCard extends Component {
  render() {
    // console.log("DharmaCard this.props.habit", this.props.habit);
    return (
      <div className="dharma-card container">
        {this.props.habit.count > 0 ? (
          <div className="dharmas row">
            <div className="col">
              {/* <FontAwesomeIcon
                icon={faCircle}
                className="circle-green"
                size="4x"
              /> */}
              <Gauge score="50" width="120" color="#00FF00" strokeWidth="12" />

              {this.props.habit.habit}
            </div>
          </div>
        ) : (
          <div className="dharmas row">
            <div className="col">
              {/* <FontAwesomeIcon
                icon={faCircle}
                className="circle-red"
                size="4x"
              /> */}
              <Gauge score="60" width="120" color="#00FF00" strokeWidth="12" />

              {this.props.habit.habit}
            </div>
          </div>
        )}
      </div>

      //   {this.props.habit.habit} }
    );
  }
}

DharmaCard.propTypes = {
  getHabits: PropTypes.func,
  habit: PropTypes.object
};

export default connect(
  null,
  { getHabits }
)(DharmaCard);
