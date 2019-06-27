import React, { Component } from "react";
import { connect } from "react-redux";
import { getHabits } from "../actions/habitActions";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";
import DharmaCard from "./DharmaCard";

class DharmaList extends Component {
  componentDidMount() {
    // console.log("CDM");
    this.props.getHabits();
  }

  render() {
    console.log("DharmaList this.props", this.props);
    const filtered = this.props.habits.filteredHabits;
    const habits = filtered ? filtered : this.props.habits.habits;
    return (
      <div>
        <SearchBar />
        {/* <h3 className="dharma-header">Dharma Card</h3> */}
        <div className="dharma-dials">
          {habits &&
            habits.map(habit => {
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
  habits: state.habits
});

export default connect(
  mapStateToProps,
  { getHabits }
)(DharmaList);
