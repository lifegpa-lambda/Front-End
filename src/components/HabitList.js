import React, { Component } from "react";

class HabitList extends Component {
  componentDidMount() {
    console.log("CDM");
  }

  render() {
    console.log("HabitList this.props", this.props);
    return (
      <div>
        <h2>Habit list</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("HabitList mapStateToProps state", state);
  return {};
};

export default connect(
  null,
  {}
)(HabitList);
