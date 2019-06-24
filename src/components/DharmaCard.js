import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { getHabits } from "../actions/habitActions";
import "../App.css";

class DharmaCard extends Component {
  componentDidMount() {
    console.log("CDM");
    this.props.getHabits();
  }
  render() {
    // console.log("DharmaCard this.props.habit", this.props.habit);
    return (
      <div className="dharma-card">
        {this.props.habit.count > 0 ? (
          <FontAwesomeIcon icon={faCircle} className="circle-green" />
        ) : (
          <FontAwesomeIcon icon={faCircle} className="circle" />
        )}
      </div>

      //   {this.props.habit.habit} }
    );
  }
}

export default connect(
  null,
  { getHabits }
)(DharmaCard);
