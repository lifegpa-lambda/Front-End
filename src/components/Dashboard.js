import React from "react";
import { connect } from "react-redux";
import { getHabits } from "../actions/habitActions";
import Gauge from "./Gauge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDharmachakra } from "@fortawesome/free-solid-svg-icons";
import "./Dharma.css";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getHabits();
  }

  render() {
    return (
      <div className="dashboard">
        <Gauge
          key="LifeGPA"
          score={this.props.lifeGPA.all}
          width={200}
          strokeWidth="11"
          topLabel="LifeGPA"
          color="purple"
          background="white"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lifeGPA: state.habits.lifeGPA
});

export default connect(
  mapStateToProps,
  { getHabits }
)(Dashboard);
