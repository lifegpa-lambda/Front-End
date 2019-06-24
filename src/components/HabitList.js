import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getHabits } from "../actions/habitActions";
import HabitCard from "./HabitCard";
import HabitForm from "./HabitForm";
import SearchBar from "./SearchBar";

class HabitList extends Component {
  componentDidMount() {
    console.log("CDM");
    this.props.getHabits();
  }

  render() {
    console.log("HabitList this.props", this.props);
    return (
      <div>
        <h2>HBTZ</h2>
        <SearchBar />
        {this.props.habits.habits.map(habit => {
          // console.log("HabitList habit", habit);
          return <HabitCard habit={habit} key={habit.id} />;
        })}
        <HabitForm />
      </div>
    );
  }
}

HabitList.propTypes = {
  habits: PropTypes.shape({
    id: PropTypes.string.isRequired,
    habit: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    count: PropTypes.number.isRequired
  })
};

const mapStateToProps = state => {
  // console.log("HabitList mapStateToProps state", state);
  return {
    habits: state.habits
  };
};

export default connect(
  mapStateToProps,
  { getHabits }
)(HabitList);
