import React from "react";
import Gauge from "../components/Gauge";
import "../styles/Gauge.scss";

import Moment from "react-moment";

const GaugesTest = () => {
  const gauges = [];
  for (let i = 1; i < 31; i++) {
    gauges.push({
      id: i,
      habit: `Habit ${i}`,
      score: Math.round(Math.random() * 100)
    });
  }

  const dateToFormat = "2019-06-26T19:17:42.634Z";

  return (
    <div>
      <Moment style={{ color: "white" }}>{dateToFormat}</Moment>
      {gauges.map(gauge => (
        <Gauge
          key={gauge.id}
          score={gauge.score}
          width="120"
          strokeWidth="12"
          bottomLabel={gauge.habit}
        />
      ))}
    </div>
  );
};

export default GaugesTest;
