import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { toggleChecked } from "../actions/habitActions";

class HabitCard extends Component {
  state = {
    checked: false
  };

  toggleChecked = event => {
    console.log("toggleChecked event.target", event.target);
    event.preventDefault();
    this.props.toggleChecked(event.target);
  };

  render() {
    console.log("DailyCard this.props.habit", this.props.habit);
    return (
      <div className="daily-card">
        <div>{this.props.habit.habit}</div>
        <div className="btn-div">
          <FontAwesomeIcon
            onClick={this.toggleChecked}
            icon={faCheckCircle}
            className="daily-circle"
            size="2x"
          />
          <FontAwesomeIcon
            onClick={this.toggleChecked}
            icon={faTimesCircle}
            className="daily-circle"
            size="2x"
          />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { toggleChecked }
)(HabitCard);
