import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getHabits } from "../actions/habitActions";
import DailyCard from "./DailyCard";
import SearchBar from "./SearchBar";
import "./Daily.css";

class DailyList extends Component {
  componentDidMount() {
    this.props.getHabits();
  }

  render() {
    const filtered = this.props.habits.filteredHabits;
    const habits = filtered ? filtered : this.props.habits.habits;
    console.log("DailyList this.props", this.props);
    return (
      <div>
        {/* <h2 className="daily-habits-header">Daily Habits</h2> */}
        <SearchBar />
        <h3 className="daily-habits-header daily-habits-sub-hheader">
          Today did you...?
        </h3>
        {/* <SearchBar /> */}
        {habits.map(habit => {
          return <DailyCard habit={habit} key={habit.id} />;
        })}
      </div>
    );
  }
}

DailyList.propTypes = {
  getHabits: PropTypes.func,
  habits: PropTypes.object
};

const mapStateToProps = state => {
  // console.log("HabitList mapStateToProps state", state);
  return {
    habits: state.habits,
    filteredHabits: state.habits.filteredHabits
  };
};

export default connect(
  mapStateToProps,
  { getHabits }
)(DailyList);
