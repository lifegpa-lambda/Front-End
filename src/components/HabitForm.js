import React, { Component } from "react";
import { connect } from "react-redux";
import { addHabit } from "../actions/habitActions";
import { updateHabit } from "../actions/habitActions";

class UpdateForm extends Component {
  state = {
    habit: this.props.activeHabit || "",
    active: false
  };

  componentDidUpdate(prevState) {
    if (
      this.props.activeHabit &&
      prevState.activeHabit !== this.props.activeHabit
    ) {
      this.setState({ habit: this.props.activeHabit, active: true });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addHabit} className="habit-form">
          <input
            type="text"
            placeholder="habit"
            name="habit"
            value={this.state.habit}
            onChange={this.handleChanges}
          />
          <button>{`${this.state.active ? "Update" : "Add Habit"}`}</button>
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

  // submitHandler = newHabit => {
  //   if (this.state.active) {
  //     this.props.updateHabit(this.state.habit);
  //   } else {
  //     this.addHabit(newHabit);
  //   }
  //   this.setState({ habit: "", active: false });
  // };

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

export default connect(
  null,
  { updateHabit, addHabit }
)(UpdateForm);
