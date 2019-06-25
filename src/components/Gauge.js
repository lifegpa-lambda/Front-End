import React from "react";
import "../styles/Gauge.scss";

const Gauge = props => {
  const { score, width, color, strokeWidth } = props;
  const halfWidth = width / 2;
  const radius = halfWidth - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (2 - (100 - score) / 100);
  console.log(width, strokeWidth, halfWidth, radius, circumference, offset);

  return (
    <div className="gauge-wrapper">
      <div className="label">{score}</div>
      <svg
        className="gauge"
        width={width}
        height={width}
        viewBox={`0 0 ${width} ${width}`}
      >
        <circle
          className="dial"
          cx={halfWidth}
          cy={halfWidth}
          r={halfWidth - strokeWidth}
          fill="none"
          stroke="#bbbbbb"
          strokeWidth={strokeWidth}
        />
        <circle
          className="score"
          cx={halfWidth}
          cy={halfWidth}
          r={halfWidth - strokeWidth}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={offset}
          strokeDashoffset={circumference}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Gauge;
