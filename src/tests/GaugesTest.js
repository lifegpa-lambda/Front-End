import React from "react";
import Gauge from "../components/Gauge";

const GaugesTest = () => {
  return (
    <div>
      <Gauge score="33" width="100" strokeWidth="8" />
      <Gauge score="33" width="100" color="#0000FF" />
      <br />
      <Gauge score="50" width="120" strokeWidth="8" height="150px" />
      <Gauge
        score="67"
        width="120"
        strokeWidth="13"
        bottomLabel="Eat breakfast"
        height="150px"
      />
      <Gauge
        score="100"
        width="200"
        strokeWidth="15"
        display="block"
        topLabel="LGPA"
      />
    </div>
  );
};

export default GaugesTest;
