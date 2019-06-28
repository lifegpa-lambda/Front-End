import React from "react";
import "./Gauge.scss";

const Gauge = props => {
  const {
    score = null,
    width = "100",
    height = "auto",
    strokeWidth = "12",
    topLabel = "",
    bottomLabel = "",
    display = "inline-block",
    background = "transparent",
    margin = "0px"
  } = props;

  const percentage = score !== null ? score : 100;

  const halfWidth = width / 2;
  const radius = halfWidth - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (2 - (100 - percentage) / 100);

  let color = props.color
    ? props.color
    : ["#ff3d3d", "#ffe53d", "#00ff00"][Math.floor(percentage / 33.5)];

  let fontSize = props.fontSize ? props.fontSize : width * 0.0185;

  return (
    <div
      className="gauge-outer-wrapper"
      style={{ display, height, margin: margin }}
    >
      <h2 className="top-label" style={{ fontSize: `${fontSize * 0.65}rem` }}>
        {topLabel}
      </h2>
      <div className="gauge-inner-wrapper">
        <div className="score" style={{ fontSize: `${fontSize}rem` }}>
          {score}
        </div>

        <svg
          className="gauge"
          width={width}
          height={width}
          viewBox={`0 0 ${width} ${width}`}
        >
          <circle
            className="background"
            cx={halfWidth}
            cy={halfWidth}
            r={halfWidth - strokeWidth * 1.35}
            fill="white"
            stroke="black"
            strokeWidth={strokeWidth}
            fillOpacity="0.7"
          />
          <circle
            className="face"
            cx={halfWidth}
            cy={halfWidth}
            r={halfWidth - strokeWidth * 1.35}
            fill={background}
            stroke="black"
            strokeWidth={strokeWidth}
            fillOpacity="0.5"
          />
          <circle
            className="dial"
            cx={halfWidth}
            cy={halfWidth}
            r={halfWidth - strokeWidth}
            fill="none"
            stroke="#333333"
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
      <p
        className="bottom-label"
        style={{ fontSize: `${Math.max(fontSize * 0.4, 1.175)}rem` }}
      >
        {bottomLabel}
      </p>
    </div>
  );
};

export default Gauge;
