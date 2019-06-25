import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addHabit } from "../actions/habitActions";
import { updateHabit } from "../actions/habitActions";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class HabitForm extends Component {
  state = {
    habitTitle: this.props.habits.activeHabit || "",
    active: false,
    categoryId: ""
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
        active: true
      });
    }
  }

  render() {
    // console.log(
    //   "HabitForm this.props.habits.activeHabit",
    //   this.props.habits.activeHabit
    // );
    // console.log("HabitForm this.state.habit", this.state.habit);
    // console.log(
    //   "HabitForm this.props.habits.activeHabit",
    //   this.props.habits.activeHabit
    // );
    return (
      <div>
        <Form onSubmit={this.submitHandler}>
          <FormGroup>
            <Label for="exampleText">NEW HBT</Label>
            <Input
              type="textarea"
              name="habitTitle"
              value={this.state.habitTitle}
              onChange={this.handleChanges}
              id="exampleText"
              placeholder="HBT"
            />
            <Input
              type="number"
              name="categoryId"
              value={this.state.categoryId}
              onChange={this.handleChanges}
              placeholder="Category"
            />
          </FormGroup>

          <Button className="add-update-button" color="primary">{`${
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
        categoryId: this.props.habits.activeHabit.categoryId
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
