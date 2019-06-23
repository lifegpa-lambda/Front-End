import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteHabit, setUpdateForm } from "../actions/habitActions";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import "../App.css";

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
    return (
      <div className="habit-card">
        <div>
          <FontAwesomeIcon icon={faCircle} className="circle" />{" "}
          {this.props.habit.habit}
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

export default connect(
  null,
  { deleteHabit, setUpdateForm }
)(HabitCard);
