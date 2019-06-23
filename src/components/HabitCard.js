import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteHabit, setUpdateForm } from "../actions/habitActions";

class HabitCard extends Component {
  deleteHabit = event => {
    event.preventDefault();
    this.props.deleteHabit(this.props.habit.id);
  };

  setUpdateForm = event => {
    event.preventDefault();
    this.props.setUpdateForm(this.props.habit);
  };

  render() {
    console.log("HabitCard this.props.habit", this.props.habit);
    return (
      <div className="habit-card">
        <div>{this.props.habit.habit}</div>
        <button onClick={this.deleteHabit} className="delete-btn">
          X
        </button>
        <button onClick={this.setUpdateForm} className="update-btn">
          Update
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteHabit, setUpdateForm }
)(HabitCard);
