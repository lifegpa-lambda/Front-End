import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addHabit } from "../actions/habitActions";
import { updateHabit } from "../actions/habitActions";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./Habit.css";

class HabitForm extends Component {
  state = {
    habitTitle: this.props.habits.activeHabit || "",
    active: false,
    categoryId: "",
    id: ""
  };

  componentDidUpdate(prevState) {
    // console.log(
    //   "HabitForm prevState.habits.activeHabit",
    //   prevState.habits.activeHabit
    // );
    if (
      this.props.habits.activeHabit &&
      prevState.habits.activeHabit !== this.props.habits.activeHabit
    ) {
      this.setState({
        habitTitle: this.props.habits.activeHabit.habitTitle,
        active: true,
        id: this.props.habits.activeHabit.id,
        categoryId: this.props.habits.activeHabit.categoryId
      });
    }
  }

  render() {
    console.log("HabitForm this.state.id", this.state.id);
    // console.log("HabitForm this.state.habit", this.state.habit);

    return (
      <div>
        <Form className="habit-form" onSubmit={this.submitHandler}>
          <FormGroup className="habit-input-container">
            <Label>NEW HBT</Label>
            <Input
              className="habit-input"
              type="textarea"
              name="habitTitle"
              value={this.state.habitTitle}
              onChange={this.handleChanges}
              placeholder="HBT"
            />
            <Input
              className="habit-input"
              type="number"
              name="categoryId"
              value={this.state.categoryId}
              onChange={this.handleChanges}
              placeholder="Category"
            />
          </FormGroup>

          <Button id="habit-form-button" className="add-update-button">{`${
            this.props.habits.active ? "UPDT" : "ADD"
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

  submitHandler = event => {
    event.preventDefault();
    if (this.props.habits.active) {
      const updateHabit = {
        habitTitle: this.state.habitTitle,
        id: this.state.id,
        categoryId: parseInt(this.state.categoryId, 10)
      };
      this.props.updateHabit(updateHabit);
    } else {
      this.addHabit(event);
    }
    this.setState({ habitTitle: "", active: false, categoryId: "" });
  };

  addHabit = event => {
    event.preventDefault();
    const newHabit = {
      habitTitle: this.state.habitTitle,
      categoryId: parseInt(this.state.categoryId, 10)
    };
    this.props.addHabit(newHabit);
    this.setState({
      habitTitle: "",
      categoryId: ""
    });
  };
}

HabitForm.propTypes = {
  activeHabit: PropTypes.object,
  active: PropTypes.bool,
  habits: PropTypes.object,
  updateHabit: PropTypes.func,
  addHabit: PropTypes.func
};

const mapStateToProps = state => {
  // console.log("HabitForm mapStateToProps state", state);
  return {
    activeHabit: state.activeHabit,
    active: state.active,
    habits: state.habits
  };
};

export default connect(
  mapStateToProps,
  { updateHabit, addHabit }
)(HabitForm);
