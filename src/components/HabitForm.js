import React, { Component } from "react";
import { connect } from "react-redux";
import { addHabit } from "../actions/habitActions";
import { updateHabit } from "../actions/habitActions";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

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
      this.setState({
        habit: this.props.habits.activeHabit.habit,
        active: true
      });
    }
  }

  render() {
    console.log(
      "HabitForm this.props.habits.activeHabit",
      this.props.habits.activeHabit
    );
    console.log("HabitForm this.state.habit", this.state.habit);
    console.log(
      "HabitForm this.props.habits.activeHabit",
      this.props.habits.activeHabit
    );
    return (
      <div>
        <Form onSubmit={this.submitHandler}>
          <FormGroup>
            <Label for="exampleText">New Habit Tracker</Label>
            <Input
              type="textarea"
              name="habit"
              value={this.state.habit}
              onChange={this.handleChanges}
              id="exampleText"
              placeholder="Inserted by Rory"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Select Habit Icon</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
            <Label for="exampleSelect">Select Habit Importance</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>

          <Button>{`${
            this.props.habits.active ? "Update" : "Add Habit"
          }`}</Button>
        </Form>
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
      const updateHabit = {
        habit: this.state.habit,
        id: this.props.habits.activeHabit.id
      };
      this.props.updateHabit(updateHabit);
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
