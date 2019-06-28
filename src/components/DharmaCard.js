import React, { Component } from "react";
import { connect } from "react-redux";
import { getHabits } from "../actions/habitActions";
import Gauge from "../components/Gauge";
import "../App.css";
import "./Dharma.scss";

class DharmaCard extends Component {
  render() {
    const { id, habitTitle, categoryId, gpa } = this.props.habit;
    const score = gpa ? gpa[this.props.time] : 0;
    // console.log("DC props.time", this.props.time);
    const width = 160;

    const category = Math.min(categoryId, 3) - 1;
    const categoryColor = ["green", "yellow", "red"][category];

    return (
      <div
        style={{
          width: `${width}px`,
          padding: "10px",
          display: "inline-block"
        }}
      >
        <Gauge
          key={id}
          score={score}
          width={width - 20}
          strokeWidth="9"
          bottomLabel={habitTitle}
          color={categoryColor}
          background={categoryColor}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  habits: state.habits.habits
});

export default connect(
  mapStateToProps,
  { getHabits }
)(DharmaCard);
