import React, { Component } from "react";
import { connect } from "react-redux";
import { filterHabits } from "../actions/habitActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

class SearchBar extends Component {
  state = {
    filteredHabits: []
  };

  render() {
    console.log("SearchBar this.props.habits.habits", this.props.habits.habits);
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {/* <FontAwesomeIcon icon={faCircle} className="link user" size="2x" /> */}
          </div>
          <input
            type="text"
            placeholder="Search"
            onChange={this.handleSearch}
          />
          <div className="col">{/* Icon links col */}</div>
        </div>
      </div>
    );
  }

  handleSearch = event => {
    const list = this.props.habits.habits.filter(habit => {
      if (habit.habit.includes(event.target.value)) {
        return habit;
      }
    });
    this.props.filterHabits(list);
  };
}

const mapStateToProps = state => {
  return {
    filteredHabits: state.filteredHabits,
    habits: state.habits
  };
};

export default connect(
  mapStateToProps,
  { filterHabits }
)(SearchBar);
