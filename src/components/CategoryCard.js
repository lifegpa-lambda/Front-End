import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { toggleChecked } from "../actions/habitActions";
import { updateHabit } from "../actions/habitActions";

import "./Habit.css";

class CategoryCard extends Component {
  state = {
    active: false,
    categoryId: 1,
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
        categoryId: this.props.habits.activeHabit.categoryId,
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
    }
  }

  activeCircleGreen = event => {
    event.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      checkedGreen: this.state.checkedGreen ? "" : "active-circle-cat",
      checkedYellow: "",
      checkedRed: "",
      categoryId: 1
    }));
  };

  activeCircleYellow = event => {
    event.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      checkedYellow: this.state.checkedYellow ? "" : "active-circle-cat",
      checkedGreen: "",
      checkedRed: "",
      categoryId: 2
    }));
  };

  activeCircleRed = event => {
    event.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      checkedRed: this.state.checkedRed ? "" : "active-circle-cat",
      checkedGreen: "",
      checkedYellow: "",
      categoryId: 3
    }));
  };

  render() {
    let dharma;
    let category = this.props.category.id;

    if (category === 1) {
      dharma = (
        <FontAwesomeIcon
          icon={faCircle}
          className={`circle-green category-circle ${this.state.checkedGreen}`}
          size="3x"
          onClick={this.activeCircleGreen}
        />
      );
    } else if (category === 2) {
      dharma = (
        <FontAwesomeIcon
          icon={faCircle}
          className={`circle-yellow category-circle ${
            this.state.checkedYellow
          }`}
          size="3x"
          onClick={this.activeCircleYellow}
        />
      );
    } else if (category === 3) {
      dharma = (
        <FontAwesomeIcon
          icon={faCircle}
          className={`circle-red category-circle ${this.state.checkedRed}`}
          size="3x"
          onClick={this.activeCircleRed}
        />
      );
    } else if (category > 3 || category < 1) {
      dharma = (
        <FontAwesomeIcon icon={faCircle} className="circle-purple" size="4x" />
      );
    }

    return <div className="dharma-card">{dharma}</div>;
  }
}

CategoryCard.propTypes = {
  toggleChecked: PropTypes.func,
  updateHabit: PropTypes.func,
  habit: PropTypes.object
};

const mapStateToProps = state => ({
  activeHabit: state.activeHabit,
  active: state.active,
  habits: state.habits
});

export default connect(
  mapStateToProps,
  { toggleChecked, updateHabit }
)(CategoryCard);
