import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { getHabits } from "../actions/habitActions";
import "../App.css";

class DharmaCard extends Component {
  componentDidMount() {
    console.log("CDM");
    this.props.getHabits();
  }
  render() {
    // console.log("DharmaCard this.props.habit", this.props.habit);
    return (
      <div className="dharma-card">
        {this.props.habit.count > 0 ? (
          <div className="dharmas">
            <FontAwesomeIcon
              icon={faCircle}
              className="circle-green"
              size="6x"
            />
            {this.props.habit.habit}
          </div>
        ) : (
          <div className="dharmas">
            <FontAwesomeIcon icon={faCircle} className="circle-red" size="6x" />
            {this.props.habit.habit}
          </div>
        )}
      </div>

      //   {this.props.habit.habit} }
    );
  }
}

DharmaCard.propTypes = {
  getHabits: PropTypes.func,
  habit: PropTypes.object
};

export default connect(
  null,
  { getHabits }
)(DharmaCard);
