import React, { Component } from "react";
import { connect } from "react-redux";
import { getHabits } from "../actions/habitActions";
import DailyCard from "./DailyCard";
import SearchBar from "./SearchBar";

class DailyList extends Component {
  componentDidMount() {
    this.props.getHabits();
  }

  render() {
    // console.log("DailyList this.props", this.props);
    return (
      <div>
        <h2>DLY HBTZ</h2>
        <h3>Today did you...?</h3>
        {/* <SearchBar /> */}
        {this.props.habits.habits.map(habit => {
          return <DailyCard habit={habit} key={habit.id} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("HabitList mapStateToProps state", state);
  return {
    habits: state.habits
  };
};

export default connect(
  mapStateToProps,
  { getHabits }
)(DailyList);
