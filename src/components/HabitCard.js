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

  render() {
    console.log("HabitCard this.props.habit", this.props.habit);

    const category = this.props.habit.categoryId;
    let dharma;

    if (category === 1) {
      dharma = <FontAwesomeIcon icon={faCircle} className="circle-green" />;
    } else if (category === 2) {
      dharma = <FontAwesomeIcon icon={faCircle} className="circle-yellow" />;
    } else if (category === 3) {
      dharma = <FontAwesomeIcon icon={faCircle} className="circle-red" />;
    }

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

export default connect(
  null,
  { deleteHabit, setUpdateForm }
)(HabitCard);
