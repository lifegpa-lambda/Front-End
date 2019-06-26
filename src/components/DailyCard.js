import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { toggleChecked } from "../actions/habitActions";
import { updateHabit } from "../actions/habitActions";

class DailyCard extends Component {
  state = {
    greenCheck: false,
    count: 0
  };

  toggleChecked = event => {
    console.log("toggleChecked this.props.habit", this.props.habit);
    event.preventDefault();
    const newHabit = {
      ...this.props.habit,
      checked: !this.props.habit.checked,
      count: this.props.habit.count + 1
    };
    console.log("newHabit", newHabit);
    this.props.updateHabit(newHabit);
  };

  toggleGreenCheck = () => {
    this.setState({ greenCheck: !this.state.greenCheck });
  };

  render() {
    console.log("DailyCard this.props.habit", this.props.habit);
    return (
      <div className="daily-card">
        <div
          onClick={this.toggleChecked}
          className={`${this.props.habit.checked ? "checked" : ""}`}
        >
          {this.props.habit.habitTitle}
        </div>
        <div className="btn-div">
          <FontAwesomeIcon
            onClick={this.toggleGreenCheck}
            icon={faCheckCircle}
            className={`${
              this.state.greenCheck ? "daily-circle-checked" : "daily-circle"
            }`}
            size="2x"
          />
        </div>
      </div>
    );
  }
}

DailyCard.propTypes = {
  toggleChecked: PropTypes.func,
  updateHabit: PropTypes.func,
  habit: PropTypes.object
};

export default connect(
  null,
  { toggleChecked, updateHabit }
)(DailyCard);
