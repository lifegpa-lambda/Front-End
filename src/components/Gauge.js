import "../styles/Gauge.scss";

const Gauge = props => {
  // const { score, width, color, strokeWidth  }
  return (
    <div className="gauge">
      <svg
        width={width / 2}
        height={width / 2}
        viewBox={`"0 0 ${width} ${width}"`}
      >
        <circle
          cx={width / 2}
          cy={width / 2}
          r={width / 2 - strokeWidth}
          fill="none"
          stroke={color}
          stroke-width={strokeWidth}
        />
        <circle
          cx={width / 2}
          cy={width / 2}
          r={width / 2 - strokeWidth}
          fill="none"
          stroke="#bbbbbb"
          stroke-width={strokeWidth}
          stroke-dasharray="339.292"
          stroke-dashoffset="135.717"
        />
      </svg>
    </div>
  );
};
