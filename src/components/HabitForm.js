import React, { Component } from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addHabit } from "../actions/habitActions";
import { updateHabit } from "../actions/habitActions";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import "./Habit.css";

class HabitForm extends Component {
  state = {
    habitTitle: this.props.habits.activeHabit || "",
    active: false,
    categoryId: "",
    id: "",
    checkedGreen: "",
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
        categoryId: this.props.habits.activeHabit.categoryId
      });
    }
  }

  activeCircleGreen = event => {
    event.preventDefault();
    this.setState({
      checkedGreen: this.state.checkedGreen ? "" : "active-circle-cat",
      categoryId: 1
    });
  };

  activeCircleYellow = event => {
    event.preventDefault();
    this.setState({
      checkedYellow: this.state.checkedYellow ? "" : "active-circle-cat",
      categoryId: 2
    });
  };

  activeCircleRed = event => {
    event.preventDefault();
    this.setState({
      checkedRed: this.state.checkedRed ? "" : "active-circle-cat",
      categoryId: 3
    });
  };

  render() {
    console.log("HabitForm this.state.categoryId", this.state.categoryId);
    // console.log("HabitForm this.state.habit", this.state.habit);

    // let dharmaActive = <div>{this.props.habits.activeHabit.habitTitle}</div>;

    let circleColor;
    if (this.state.checkedGreen) {
      circleColor = "green";
    } else if (this.state.checkedYellow) {
      circleColor = "yellow";
    } else if (this.state.checkedRed) {
      circleColor = "red";
    } else {
      circleColor = "";
    }

    let dharmaBox = this.state.active ? (
      <div className="dharma-box container">
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
        <Form className="habit-form">
          <FormGroup className="habit-input-container">
            {/* <Label>NEW HBT</Label> */}
            <Input
              className="habit-input"
              type="textarea"
              name="habitTitle"
              value={this.state.habitTitle}
              onChange={this.handleChanges}
              placeholder="HBT"
            />
            {/* <Label>Select Category</Label>
            <Input
              className="habit-input"
              type="select"
              name="categoryId"
              value={this.state.categoryId}
              onChange={this.handleChanges}
            >
              <option className="option-green">1</option>
              <option className="option-yellow">2</option>
              <option className="option-red">3</option>
              <option className="option-purple">4</option>
            </Input> */}
          </FormGroup>
        </Form>
        <div className="category-header">Priority Level</div>
        <div className="category">
          <FontAwesomeIcon
            icon={faCircle}
            className={`circle-green category-circle ${
              this.state.checkedGreen
            }`}
            size="3x"
            onClick={this.activeCircleGreen}
          />
          <FontAwesomeIcon
            icon={faCircle}
            className={`circle-yellow category-circle ${
              this.state.checkedYellow
            }`}
            size="3x"
            onClick={this.activeCircleYellow}
          />
          <FontAwesomeIcon
            icon={faCircle}
            className={`circle-red category-circle ${this.state.checkedRed}`}
            size="3x"
            onClick={this.activeCircleRed}
          />
        </div>
        <Button
          id="habit-form-button"
          className="add-update-button"
          onClick={this.submitHandler}
        >{`${this.props.habits.active ? "UPDT" : "ADD"}`}</Button>
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
