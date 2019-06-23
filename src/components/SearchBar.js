import React, { Component } from "react";
import { connect } from "react-redux";

class SearchBar extends Component {
  state = {
    filteredHabits: []
  };

  render() {
    console.log("SearchBar this.props.habits.habits", this.props.habits.habits);
    return (
      <div className="container">
        <div className="row">
          <div className="col">Logo col</div>
          <input
            type="text"
            placeholder="Search"
            onChange={this.handleSearch}
          />
          <div className="col">Icon links col</div>
        </div>
      </div>
    );
  }

  handleSearch = event => {
    console.log("handleSearch event.target.value", event.target.value);
    const list = this.props.habits.habits.filter(habit => {
      console.log("handleSeach habit.habit", habit.habit);
      if (habit.habit.includes(event.target.value)) {
        return habit;
      }
      //   this.setState({ filteredHabits: list });
    });
    console.log("handleSearch list", list);
    // this.props.filterHabits(list);
  };
}

const mapStateToProps = state => {
  console.log("SearchBar mapStateToProps state", state);
  //   console.log(
  //     "SearchBar mapStateToProps state.filteredHabits",
  //     state.filteredHabits
  //   );
  return {
    filteredHabits: state.filteredHabits,
    habits: state.habits
  };
};

export default connect(
  mapStateToProps,
  {}
)(SearchBar);
