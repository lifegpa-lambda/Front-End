import React, { Component } from "react";
import { connect } from "react-redux";

class HabitForm extends Component {
  state = {
    habit: ""
  };

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
  { addHabit }
)(HabitForm);
