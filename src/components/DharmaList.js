import React, { Component } from "react";
import { connect } from "react-redux";
import { getHabits } from "../actions/habitActions";
import PropTypes from "prop-types";
import DharmaCard from "./DharmaCard";

class DharmaList extends Component {
  componentDidMount() {
    // console.log("CDM");
    this.props.getHabits();
  }

  render() {
    console.log("DharmaList this.props", this.props);
    return (
      <div>
        <h3 className="dharma-header">Dharma Card</h3>
        <div className="dharma-dials">
          {this.props.habits &&
            this.props.habits.map(habit => {
              // console.log("HabitList habit", habit);
              return <DharmaCard habit={habit} key={habit.id} />;
            })}
        </div>
      </div>
    );
  }
}

DharmaList.propTypes = {
  getHabits: PropTypes.func,
  habits: PropTypes.object
};

const mapStateToProps = state => ({
  habits: state.habits.habits
});

export default connect(
  mapStateToProps,
  { getHabits }
)(DharmaList);
