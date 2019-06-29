import React, { Component } from "react";
import { connect } from "react-redux";
import { Input } from "reactstrap";
import { filterHabits } from "../actions/habitActions";
import "./Search.scss";

class SearchBar extends Component {
  state = {
    searchTerm: ""
  };

  render() {
    // console.log("SearchBar this.props.habits.habits", this.props.habits.habits);
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {/* <FontAwesomeIcon icon={faCircle} className="link user" size="2x" /> */}
          </div>
          <Input
            type="text"
            placeholder="Search"
            onChange={this.handleSearch}
            value={this.state.searchTerm}
            className="search-bar"
          />
          <div className="col">{/* Icon links col */}</div>
        </div>
      </div>
    );
  }

  handleSearch = event => {
    const term = event.target.value.toLowerCase();
    this.setState({ searchTerm: term });
    const list = this.props.habits.habits.filter(habit => {
      return habit.habitTitle.toLowerCase().includes(term) ? habit : null;
    });
    this.props.filterHabits(list);
  };
}

const mapStateToProps = state => {
  return {
    habits: state.habits
  };
};

export default connect(
  mapStateToProps,
  { filterHabits }
)(SearchBar);
