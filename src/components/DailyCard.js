import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

class HabitCard extends Component {
  render() {
    console.log("DailyCard this.props.habit", this.props.habit);
    return (
      <div className="daily-card">
        <div>
          <FontAwesomeIcon icon={faCircle} className="link user" />
          {this.props.habit.habit}
        </div>
        <div className="btn-div">
          <FontAwesomeIcon icon={faCircle} className="link user" />
          <FontAwesomeIcon icon={faCircle} className="link user" />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(HabitCard);
