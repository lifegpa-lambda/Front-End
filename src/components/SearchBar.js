import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    filteredHabits: []
  };

  render() {
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
    console.log("SearchBar event.target.value", event.target.value);
    const list = this.props.habits.filter(habit => {
      if (habit.habit.includes(event.target.value)) {
        return habit;
      }
    });
    this.setState({ filteredHabits: list });
  };
}

const mapStateToProps = state => {
  console.log("SearchBar mapStateToProps state", state);
  console.log(
    "SearchBar mapStateToProps state.filteredHabits",
    state.filteredHabits
  );
  return {
    filteredHabits: state.filteredHabits,
    habits: state.habits
  };
};

export default connect(
  mapStateToProps,
  {}
)(SearchBar);
