import React, { Component } from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addHabit } from "../actions/habitActions";
import { updateHabit } from "../actions/habitActions";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
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
    console.log(
      "HabitForm this.props.habits.activeHabit",
      this.props.habits.activeHabit
    );
    // console.log("HabitForm this.state.habit", this.state.habit);

    // let dharmaActive = <div>{this.props.habits.activeHabit.habitTitle}</div>;

    let dharmaBox = this.state.active ? (
      <div className="dharma-box">
        <div>{this.props.habits.activeHabit.habitTitle}</div>
        <div>Category: {this.props.habits.activeHabit.categoryId}</div>
        <div>
          Created:{" "}
          <Moment fromNow>{this.props.habits.activeHabit.createdAt}</Moment>
        </div>
        <div>Completed: {this.props.habits.activeHabit.completed}</div>
      </div>
    ) : (
      <div />
    );

    return (
      <div>
        {dharmaBox}
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
            {/* <Input
              className="habit-input"
              type="number"
              name="categoryId"
              value={this.state.categoryId}
              onChange={this.handleChanges}
              placeholder="Category"
            /> */}
          </FormGroup>
          <FormGroup>
            <Label>Select Category</Label>
            <Input
              type="select"
              name="categoryId"
              value={this.state.categoryId}
              onChange={this.handleChanges}
            >
              <option className="option-green">1</option>
              <option className="option-yellow">2</option>
              <option className="option-red">3</option>
              <option className="option-purple">4</option>
            </Input>
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
        categoryId:
          this.state.categoryId === "" ? 1 : parseInt(this.state.categoryId, 10)
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
      categoryId:
        this.state.categoryId === "" ? 1 : parseInt(this.state.categoryId, 10)
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
