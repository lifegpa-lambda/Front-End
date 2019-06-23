import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteHabit } from "../actions/habitActions";
// import { deleteHabit } from "../actions/habitActions";

class HabitCard extends Component {
  deleteHabit = event => {
    event.preventDefault();
    this.props.deleteHabit(this.props.habit.id);
  };

  // setUpdateForm = event => {
  //   event.preventDefault();
  //   this.props.setUpdateForm(this.props.habit.id);
  // };

  // setUpdateForm = (event, habit) => {
  //   event.preventDefault();
  //   this.setState({
  //     activeHabit: habit
  //   })
  // }

  // updateHabit = event => {
  //   event.preventDefault();
  //   this.props.updateHabit(this.props.habit.id);
  // };

  render() {
    return (
      <div className="habit-card">
        <div>{this.props.habit.habit}</div>
        <button onClick={this.deleteHabit} className="delete-btn">
          X
        </button>
        <button className="update-btn">Update</button>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteHabit }
)(HabitCard);
