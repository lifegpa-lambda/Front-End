import React, { Component } from "react";
import { connect } from "react-redux";
import { getHabits } from "../actions/habitActions";
import DailyCard from "./DailyCard";
import HabitForm from "./HabitForm";
import SearchBar from "./SearchBar";

class HabitList extends Component {
  componentDidMount() {
    console.log("CDM");
    this.props.getHabits();
  }

  render() {
    console.log("DailyList this.props", this.props);
    return (
      <div>
        <h2>DLY HBTZ</h2>
        <SearchBar />
        {this.props.habits.habits.map(habit => {
          console.log("HabitList habit", habit);
          return <DailyCard habit={habit} key={habit.id} />;
        })}
        <HabitForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("HabitList mapStateToProps state", state);
  return {
    habits: state.habits
  };
};

export default connect(
  mapStateToProps,
  { getHabits }
)(DailyList);
