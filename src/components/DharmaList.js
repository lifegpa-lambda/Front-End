import React, { Component } from "react";
import { connect } from "react-redux";
import { getHabits } from "../actions/habitActions";
import PropTypes from "prop-types";
import DharmaCard from "./DharmaCard";

class DharmaList extends Component {
  render() {
    console.log("DharmaList this.props", this.props);
    return (
      <div>
        <h3>Dharma Card</h3>
        {/* {this.props.habits.habits.map(habit => {
          console.log("DharmaList habit", habit);
          return <DharmaCard habit={habit} key={habit.id} />;
        })} */}
      </div>
    );
  }
}

DharmaList.propTypes = {
  getHabits: PropTypes.func,
  habits: PropTypes.object
};

const mapStateToProps = state => {
  // console.log("DharmaList mapStateToProps state", state);
  return {
    habits: state.habits
  };
};

export default connect(
  mapStateToProps,
  { getHabits }
)(DharmaList);
