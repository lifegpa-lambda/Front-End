import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "reactstrap";
import { getHabits } from "../actions/habitActions";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";
import DharmaCard from "./DharmaCard";

class DharmaList extends Component {
  state = {
    timePeriod: "all"
  };

  componentDidMount() {
    this.props.getHabits();
  }

  updateTimePeriod = (event, time) => {
    event.persist();
    this.setState({ timePeriod: time });
  };

  render() {
    // console.log("DharmaList this.props", this.props);
    const filtered = this.props.habits.filteredHabits;
    const habits = filtered ? filtered : this.props.habits.habits;
    return (
      <div>
        <SearchBar />
        <div className="nav-bar time-bar">
          <NavLink
            href="#all"
            className={this.state.timePeriod === "all" ? "selected-time" : null}
            onClick={e => this.updateTimePeriod(e, "all")}
          >
            ALL
          </NavLink>
          <NavLink
            href="#thirty"
            className={
              this.state.timePeriod === "thirty" ? "selected-time" : null
            }
            onClick={e => this.updateTimePeriod(e, "thirty")}
          >
            30
          </NavLink>{" "}
          <NavLink
            href="#sixty"
            className={
              this.state.timePeriod === "sixty" ? "selected-time" : null
            }
            onClick={e => this.updateTimePeriod(e, "sixty")}
          >
            60
          </NavLink>{" "}
          <NavLink
            href="#ninety"
            className={
              this.state.timePeriod === "ninety" ? "selected-time" : null
            }
            onClick={e => this.updateTimePeriod(e, "ninety")}
          >
            90
          </NavLink>
        </div>
        {/* <h3 className="dharma-header">Dharma Card</h3> */}
        <div className="dharma-dials">
          {habits &&
            habits.map(habit => {
              // console.log("HabitList habit", habit);
              return (
                <DharmaCard
                  habit={habit}
                  key={habit.id}
                  time={this.state.timePeriod}
                />
              );
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
