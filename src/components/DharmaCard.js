import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import "../App.css";

class DharmaCard extends Component {
  render() {
    // console.log("DharmaCard this.props.habit", this.props.habit);
    return (
      <div className="dharma-card">
        <div>
          <FontAwesomeIcon icon={faCircle} className="circle" />{" "}
          {this.props.habit.habit}
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(DharmaCard);
