import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { toggleChecked } from "../actions/habitActions";
import { updateHabit } from "../actions/habitActions";

class DailyCard extends Component {
  // state = {
  //   checked: false
  // };

  toggleChecked = event => {
    console.log("toggleChecked this.props.habit", this.props.habit);
    event.preventDefault();
    const newHabit = {
      ...this.props.habit,
      checked: !this.props.habit.checked
    };
    console.log("newHabit", newHabit);
    this.props.updateHabit(newHabit);
  };

  render() {
    console.log("DailyCard this.props", this.props);
    return (
      <div className="daily-card">
        <div
          onClick={this.toggleChecked}
          className={`${this.props.habit.checked ? "checked" : ""}`}
        >
          {this.props.habit.habit}
        </div>
        <div className="btn-div">
          <FontAwesomeIcon
            onClick={this.toggleChecked}
            icon={faCheckCircle}
            className={`${
              this.props.habit.checked ? "daily-circle-checked" : "daily-circle"
            }`}
            size="2x"
          />
          <FontAwesomeIcon
            onClick={this.toggleChecked}
            icon={faTimesCircle}
            className={`${
              this.props.habit.checked ? "daily-times-checked" : "daily-circle"
            }`}
            size="2x"
          />
          <FontAwesomeIcon
            // onClick={this.toggleChecked}
            icon={faTimesCircle}
            className="daily-circle"
            size="2x"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    habits: state.habits
  };
};

export default connect(
  mapStateToProps,
  { toggleChecked, updateHabit }
)(DailyCard);
