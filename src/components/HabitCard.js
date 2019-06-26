import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteHabit, setUpdateForm } from "../actions/habitActions";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import "../App.css";
import "./Habit.css";

class HabitCard extends Component {
  deleteHabit = event => {
    event.preventDefault();
    this.props.deleteHabit(this.props.habit.id);
  };

  setUpdateForm = event => {
    event.preventDefault();
    this.props.setUpdateForm(this.props.habit);
  };

  // setUpdateBox = event => {
  //   event.preventDefault();
  //   this.props.setUpdateBox(this.props.habit);
  // };

  render() {
    console.log("HabitCard this.props", this.props);
    console.log(
      "HabitCard this.props.habits.activeHabit",
      this.props.habits.activeHabit
    );

    const category = this.props.habit.categoryId;
    let dharmaColor;
    if (category > 3 || category < 0) {
      dharmaColor = "purple";
    } else if (category === 1) {
      dharmaColor = "green";
    } else if (category === 2) {
      dharmaColor = "yellow";
    } else if (category === 3) {
      dharmaColor = "red";
    }

    let dharma = (
      <FontAwesomeIcon icon={faCircle} className={`circle-${dharmaColor}`} />
    );

    // let dharmaBox = <div className="dharma-box">Dharma Box</div>;

    // If activeHabit is true, render a new div showing activeHabit characteristics underneath the matching habit
    // if (this.props.habits.activeHabit) {
    //   dharma = (
    //     <div>
    //       <FontAwesomeIcon
    //         icon={faCircle}
    //         className={`circle-${dharmaColor}`}
    //       />
    //       {dharmaBox}
    //     </div>
    //   );
    // } else {
    //   dharma = (
    //     <FontAwesomeIcon icon={faCircle} className={`circle-${dharmaColor}`} />
    //   );
    // }

    // let dharma = (
    //   <div>
    //     <FontAwesomeIcon icon={faCircle} className={`circle-${dharmaColor}`} />
    //     <h3>Test Div</h3>
    //   </div>
    // );

    return (
      <div className="habit-card">
        <div>
          {dharma}
          {this.props.habit.habitTitle}
        </div>
        <div className="btn-div">
          <Button
            onClick={this.setUpdateForm}
            className="card-btn"
            color="primary"
          >
            UPDT
          </Button>
          <Button
            onClick={this.deleteHabit}
            className="card-btn"
            color="primary"
          >
            X
          </Button>
        </div>
      </div>
    );
  }
}

HabitCard.propTypes = {
  deleteHabit: PropTypes.func,
  setUpdateForm: PropTypes.func,
  habit: PropTypes.object
};

const mapStateToProps = state => {
  // console.log("HabitCard mapStateToProps state", state);
  return {
    activeHabit: state.activeHabit,
    active: state.active,
    habits: state.habits
  };
};

export default connect(
  mapStateToProps,
  { deleteHabit, setUpdateForm }
)(HabitCard);
