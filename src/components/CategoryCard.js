import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { toggleChecked, setActiveCategory } from "../actions/habitActions";

import "./Habit.css";

class CategoryCard extends Component {
  state = {
    checkedGreen: "active-circle-cat",
    checkedYellow: "",
    checkedRed: ""
  };

  activeCircleGreen = event => {
    event.preventDefault();
    const cat = 1;
    this.props.setActiveCategory(cat);
    this.setState(prevState => ({
      ...prevState,
      checkedGreen: this.state.checkedGreen ? "" : "active-circle-cat",
      checkedYellow: "",
      checkedRed: ""
    }));
  };

  activeCircleYellow = event => {
    event.preventDefault();
    const cat = 2;
    this.props.setActiveCategory(cat);
    this.setState(prevState => ({
      ...prevState,
      checkedYellow: this.state.checkedYellow ? "" : "active-circle-cat",
      checkedGreen: "",
      checkedRed: ""
    }));
  };

  activeCircleRed = event => {
    event.preventDefault();
    const cat = 3;
    this.props.setActiveCategory(cat);
    this.setState(prevState => ({
      ...prevState,
      checkedRed: this.state.checkedRed ? "" : "active-circle-cat",
      checkedGreen: "",
      checkedYellow: ""
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
  { toggleChecked, setActiveCategory }
)(CategoryCard);
