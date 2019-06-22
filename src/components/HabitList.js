import React, { Component } from "react";
import { connect } from "react-redux";
import { getHabits } from "../actions/habitActions";
import HabitCard from "./HabitCard";
import HabitForm from "./HabitForm";

class HabitList extends Component {
  componentDidMount() {
    console.log("CDM");
    this.props.getHabits();
  }

  render() {
    console.log("HabitList this.props", this.props);
    return (
      <div>
        <h2>Habit list</h2>
        {this.props.habits.habits.map(habit => {
          console.log("HabitList habit", habit);
          return <HabitCard habit={habit} key={habit.id} />;
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
)(HabitList);
