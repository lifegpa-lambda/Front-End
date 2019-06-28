import React, { Component } from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addHabit } from "../actions/habitActions";
import { updateHabit } from "../actions/habitActions";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import "./Habit.css";
import CategoryList from "./CategoryList";

class HabitForm extends Component {
  state = {
    habitTitle: this.props.habits.activeHabit || "",
    active: false,
    categoryId: this.props.habits.categoryId,
    id: "",
    checkedGreen: "active-circle-cat",
    checkedYellow: "",
    checkedRed: ""
  };

  componentDidUpdate(prevState) {
    if (
      this.props.habits.activeHabit &&
      prevState.habits.activeHabit !== this.props.habits.activeHabit
    ) {
      this.setState({
        habitTitle: this.props.habits.activeHabit.habitTitle,
        active: true,
        id: this.props.habits.activeHabit.id,
        checkedGreen:
          this.props.habits.activeHabit.categoryId === 1
            ? "active-circle-cat"
            : "",
        checkedYellow:
          this.props.habits.activeHabit.categoryId === 2
            ? "active-circle-cat"
            : "",
        checkedRed:
          this.props.habits.activeHabit.categoryId === 3
            ? "active-circle-cat"
            : ""
      });
    } else if (
      this.props.habits.categoryId &&
      prevState.habits.categoryId !== this.props.habits.categoryId
    ) {
      this.setState({
        categoryId: this.props.habits.categoryId
      });
    }
  }

  render() {
    console.log("HabitForm this.props.habits", this.props.habits);
    console.log("HabitForm this.state.categoryId", this.state.categoryId);

    let dharmaBox = this.state.active ? (
      <div className="dharma-box container">
        <div>Habit: {this.props.habits.activeHabit.habitTitle}</div>
        <div>Category: {this.state.categoryId}</div>
        <div>
          Created:{" "}
          <Moment fromNow>{this.props.habits.activeHabit.createdAt}</Moment>
        </div>
        <div>
          Completed:{" "}
          {this.props.habits.activeHabit.history.slice(-1) === "x"
            ? "Yes"
            : "No"}
        </div>
      </div>
    ) : (
      <div />
    );

    let addCatForm = this.state.active ? (
      <Input
        className="habit-input"
        type="text"
        name="category"
        value={this.state.category}
        onChange={this.handleChanges}
        placeholder="add a new category or choose below"
      />
    ) : (
      <div />
    );

    return (
      <div>
        {dharmaBox}
        <Form className="habit-form" onSubmit={this.submitHandler}>
          <FormGroup className="habit-input-container">
            {/* <Label>NEW HBT</Label> */}
            <Input
              className="habit-input"
              type="text"
              name="habitTitle"
              value={this.state.habitTitle}
              onChange={this.handleChanges}
              placeholder="add a new habit"
            />
            {addCatForm}
          </FormGroup>
        </Form>
        <div className="category-header">Priority Level</div>
        <div className="category">
          <CategoryList />
        </div>
        <Button
          id="habit-form-button"
          className="add-update-button"
          onClick={this.submitHandler}
        >{`${this.props.habits.active ? "UPDATE" : "ADD"}`}</Button>
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
      categoryId: "",
      checkedGreen: "",
      checkedYellow: "",
      checkedRed: ""
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
  console.log("HabitForm mapStateToProps state", state);
  return {
    activeHabit: state.activeHabit,
    active: state.active,
    habits: state.habits,
    categoryId: state.habits.categoryId
  };
};

export default connect(
  mapStateToProps,
  { updateHabit, addHabit }
)(HabitForm);
