import React from "react";
import "../styles/Gauge.scss";

const Gauge = props => {
  const {
    score,
    width = "100",
    height = "auto",
    strokeWidth = "12",
    topLabel = "",
    bottomLabel = "",
    display = "inline-block"
  } = props;

  const halfWidth = width / 2;
  const radius = halfWidth - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (2 - (100 - score) / 100);

  let color = props.color
    ? props.color
    : ["#ff3d3d", "#ffe53d", "#00ff00"][Math.floor(score / 33.5)];

  let fontSize = props.fontSize ? props.fontSize : width * 0.014;

  return (
    <div className="gauge-outer-wrapper" style={{ display, height }}>
      <h2 className="top-label" style={{ fontSize: `${fontSize * 0.65}rem` }}>
        {topLabel}
      </h2>
      <div className="gauge-inner-wrapper">
        <div className="score" style={{ fontSize: `${fontSize}rem` }}>
          {score}
          <small>%</small>
        </div>
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
            stroke="#555555"
            strokeWidth={strokeWidth}
          />
          <circle
            className="progress"
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
      <p className="bottom-label" style={{ fontSize: `${fontSize * 0.7}rem` }}>
        {bottomLabel}
      </p>
    </div>
  );
};

export default Gauge;
