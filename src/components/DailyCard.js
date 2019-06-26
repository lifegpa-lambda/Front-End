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
    history: ""
  };

  toggleComplete = event => {
    event.preventDefault();
    const habitCheck = "x";
    const newHabit = {
      ...this.props.habit,
      history: this.props.habit.history.concat(habitCheck),
      completed: !this.props.habit.completed
    };
    this.props.updateHabit(newHabit);
  };

  // toggleGreenCheck = () => {
  //   this.setState({ greenCheck: !this.state.greenCheck });
  // };

  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    console.log("DailyCard this.props.habit", this.props.habit);
    return (
      <div className="daily-card">
        <div
          onClick={this.toggleChecked}
          className={`${this.props.habit.completed ? "checked" : ""}`}
        >
          {this.props.habit.habitTitle}
        </div>
        <div className="btn-div">
          <FontAwesomeIcon
            onClick={this.toggleComplete}
            icon={faCheckCircle}
            className={`${
              this.props.habit.completed
                ? "daily-circle-checked"
                : "daily-circle"
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
