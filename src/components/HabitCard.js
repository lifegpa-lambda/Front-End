import React from "react";

const HabitCard = props => {
  return (
    <div className="habit-card">
      <div>{props.habit.habit}</div>
    </div>
  );
};

export default HabitCard;
