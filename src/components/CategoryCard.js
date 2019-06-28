import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { toggleChecked, setActiveCategory } from "../actions/habitActions";

import "./Habit.css";

class CategoryCard extends Component {
  // state = {
  //   checkedGreen: "active-circle-cat",
  //   checkedYellow: "",
  //   checkedRed: ""
  // };

  //   let activeCircleCat = "active-circle-cat"

  activeCircleGreen = event => {
    event.preventDefault();
    this.props.activeCircleGreen(this.props.category.id);
  };

  activeCircleYellow = event => {
    event.preventDefault();
    this.props.activeCircleYellow(this.props.category.id);
  };

  activeCircleRed = event => {
    event.preventDefault();
    this.props.activeCircleRed(this.props.category.id);
  };

  render() {
    let dharma;
    let category = this.props.category.id;
    console.log("CategoryCard this.state", this.state);

    if (category === 1) {
      dharma = (
        <FontAwesomeIcon
          icon={faCircle}
          className={`circle-green category-circle ${this.props.checkedGreen}`}
          size="3x"
          onClick={this.activeCircleGreen}
        />
      );
    } else if (category === 2) {
      dharma = (
        <FontAwesomeIcon
          icon={faCircle}
          className={`circle-yellow category-circle ${
            this.props.checkedYellow
          }`}
          size="3x"
          onClick={this.activeCircleYellow}
        />
      );
    } else if (category === 3) {
      dharma = (
        <FontAwesomeIcon
          icon={faCircle}
          className={`circle-red category-circle ${this.props.checkedRed}`}
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
  { toggleChecked, setActiveCategory }
)(CategoryCard);
