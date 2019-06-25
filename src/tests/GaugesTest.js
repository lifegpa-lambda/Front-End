import React from "react";
import Gauge from "../components/Gauge";
import "../styles/Gauge.scss";

const GaugesTest = () => {
  const gauges = [];
  for (let i = 1; i < 31; i++) {
    gauges.push({
      id: i,
      habit: `Habit ${i}`,
      score: Math.round(Math.random() * 100)
    });
  }
  return (
    <div>
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
