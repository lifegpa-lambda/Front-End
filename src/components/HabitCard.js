import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteHabit, setUpdateForm } from "../actions/habitActions";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
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
    const category = this.props.habit.categoryId;
    let dharmaColor = "green";
    if (category === 2) {
      dharmaColor = "yellow";
    } else if (category === 3) {
      dharmaColor = "red";
    }

    let dharma = (
      <FontAwesomeIcon icon={faCircle} className={`circle-${dharmaColor}`} />
    );

    return (
      <div className="habit-card">
        <div className={`habit habit-${dharmaColor}`}>
          {dharma}
          {this.props.habit.habitTitle}
        </div>
        <div className="btn-div">
          <Button
            onClick={this.setUpdateForm}
            className="card-btn"
            color="primary"
          >
            <FontAwesomeIcon icon={faPenSquare} size="2x" />
          </Button>
          <Button
            onClick={this.deleteHabit}
            className="card-btn"
            color="primary"
          >
            <FontAwesomeIcon icon={faTrashAlt} size="2x" />
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
