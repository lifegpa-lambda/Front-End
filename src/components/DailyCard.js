import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
// import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { toggleChecked } from "../actions/habitActions";
import { updateHabit } from "../actions/habitActions";
import "./Daily.css";

class DailyCard extends Component {
  state = {
    completed: false
  };

  componentDidMount() {
    const history = this.props.habit.history;
    console.log("DC cdm history", history[history.length - 1]);
    const completed = history[history.length - 1] === "x" ? true : false;
    console.log("DC cdm completed", completed);
    this.setState({ completed });
  }

  toggleComplete = event => {
    event.preventDefault();
    const completed = !this.state.completed;
    const habitCheck = completed ? " " : "x";
    let history = this.props.habit.history;
    history = history.replace(/.$/, habitCheck);
    const newHabit = {
      ...this.props.habit,
      history,
      completed
    };
    this.props.updateHabit(newHabit);
    this.setState({ completed });
  };

  // toggleGreenCheck = () => {
  //   this.setState({ greenCheck: !this.state.greenCheck });
  // };

  toggleChecked = () => {
    this.setState({ completed: !this.state.completed });
  };

  render() {
    console.log("DailyCard this.props.habit", this.props.habit);
    return (
      <div className="daily-card">
        <div
          onClick={this.toggleChecked}
          className={`${this.state.completed ? "checked" : ""}`}
        >
          {this.props.habit.habitTitle}
        </div>
        <div className="btn-div">
          <FontAwesomeIcon
            onClick={this.toggleComplete}
            icon={faCheckCircle}
            className={`${
              this.state.completed ? "daily-circle-checked" : "daily-circle"
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

const mapStateToProps = state => ({
  habits: state.habits
});

export default connect(
  mapStateToProps,
  { toggleChecked, updateHabit }
)(DailyCard);
