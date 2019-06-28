import React from "react";
import { connect } from "react-redux";
import { getHabits } from "../actions/habitActions";
import Gauge from "./Gauge";
import "./Dharma.css";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getHabits();
  }

  render() {
    return (
      <div className="dashboard">
        <div>
          <Gauge
            key="LifeGPA"
            score={this.props.lifeGPA.all}
            width={200}
            strokeWidth="11"
            topLabel="LifeGPA"
            color="purple"
            background="white"
            margin="10px 0 20px"
          />
        </div>
        <Gauge
          key="LifeGPA"
          score={this.props.lifeGPA.thirty}
          width={150}
          strokeWidth="8"
          bottomLabel="30 Day GPA"
          color="purple"
          background="white"
        />
        <Gauge
          key="LifeGPA"
          score={this.props.lifeGPA.sixty}
          width={150}
          strokeWidth="8"
          bottomLabel="60 Day GPA"
          color="purple"
          background="white"
        />
        <Gauge
          key="LifeGPA"
          score={this.props.lifeGPA.ninety}
          width={150}
          strokeWidth="8"
          bottomLabel="90 Day GPA"
          color="purple"
          background="white"
        />
        <h5
          className="dharma-header"
          onClick={e => this.props.history.push("/dharma")}
        >
          Details on your <span>Dharma</span> page >>
        </h5>
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
