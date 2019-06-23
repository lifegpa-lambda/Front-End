import React, { Component } from "react";
import { connect } from "react-redux";
import { addHabit } from "../actions/habitActions";
import { updateHabit } from "../actions/habitActions";

class UpdateForm extends Component {
  state = {
    habit: this.props.habits.activeHabit || "",
    active: false
  };

  componentDidUpdate(prevState) {
    console.log(
      "HabitForm prevState.habits.activeHabit",
      prevState.habits.activeHabit
    );
    if (
      this.props.habits.activeHabit &&
      prevState.habits.activeHabit !== this.props.habits.activeHabit
    ) {
      this.setState({ habit: this.props.habits.activeHabit, active: true });
    }
  }

  render() {
    console.log("HabitForm this.props", this.props);
    console.log(
      "HabitForm this.props.habits.activeHabit",
      this.props.habits.activeHabit
    );
    return (
      <div>
        <form onSubmit={this.submitHandler} className="habit-form">
          <input
            type="text"
            placeholder="habit"
            name="habit"
            value={this.state.habit}
            onChange={this.handleChanges}
          />
          <button>{`${
            this.props.habits.active ? "Update" : "Add Habit"
          }`}</button>
        </form>
      </div>
    );
  }

  handleChanges = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = newHabit => {
    if (this.props.habits.active) {
      this.props.updateHabit(this.state.habit);
    } else {
      this.addHabit(newHabit);
    }
    this.setState({ habit: "", active: false });
  };

  addHabit = event => {
    event.preventDefault();
    const newHabit = {
      habit: this.state.habit
    };
    this.props.addHabit(newHabit);
    this.setState({
      habit: ""
    });
  };
}

const mapStateToProps = state => {
  console.log("HabitForm mapStateToProps state", state);
  return {
    activeHabit: state.activeHabit,
    active: state.active,
    habits: state.habits
  };
};

export default connect(
  mapStateToProps,
  { updateHabit, addHabit }
)(UpdateForm);
