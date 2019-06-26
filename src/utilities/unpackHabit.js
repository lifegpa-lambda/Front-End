// const moment = require("moment");
import moment from "moment";

// Given a string `history` where a space indicates a day a habit was not kept,
// and any other character indicates kept, and a date `createdAt` in YYYY-MM-DD HH:MM:SS format,
// process the string to add empty data for missing days since last update, and calculate GPA (percentage)
// for how many days habit was successfully kept over time periods of 30, 60, 90 and All. Return an object
// containing the processed string and GPA for all time periods.
//
// Example:
//
// console.log(unpackHabit("X X X X X", "2019-06-15 03:47:27")); // 5 out of 10 days if today is 24 June 2019
//
// {
//   history: "X X X X X ",
//   GPA: { thirty: 50, sixty: 50, ninety: 50, all: 50 }
// }

const unpackHabit = habit => {
  // Calculate days between start date and today, rounded up to the next whole day
  let { history, createdAt } = habit;
  // console.log(habit, createdAt);

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize today's date to midnight
  const start = moment(createdAt.split("T")[0]); // Normalize createDate to midnight by using only the date

  // Calculate days passed since createdAt. Fractional values are rounded up because any part of a day counts, then 1 is added to include today.
  let daysSinceStart =
    Math.ceil(
      moment
        .duration({
          from: start,
          to: today
        })
        .asDays()
    ) + 1;
  if (daysSinceStart <= 0) daysSinceStart = 1;

  history = history.padEnd(daysSinceStart, " ");
  // console.log("unpackhabit history", habit.habitTitle, history, history.length);
  // console.log("unpackhabit daysSinceStart", habit.habitTitle, daysSinceStart);

  // console.log("daysSinceStart", daysSinceStart);
  if (history.length > daysSinceStart)
    history = history.substring(history.length - daysSinceStart);
  // console.log("history after", history);

  // If a day or more has passed since stats were last updated, add empty stats (represented by spaces) for the missing days

  // Helper function for determining GPA
  const gpaCalc = timeSpan => {
    // If desired timeSpan is greater than the amount of time since tracking started, change timeSpan to daysSinceStart
    timeSpan = timeSpan > daysSinceStart ? daysSinceStart : timeSpan;
    // Count the numbers of times a habit was kept by removing all spaces and checking the length. .substring() is used to select the desired number of days starting from the most recent
    const daysKept = () => {
      return history.substring(history.length - timeSpan).replace(/\s/g, "")
        .length;
    };
    return Math.round((daysKept() * 100) / timeSpan);
  };

  console.log("History", history, history.length);

  // console.log(`Days tracked: ${history.length}`);
  return {
    processedHabit: { ...habit, history: history },
    GPA: {
      thirty: gpaCalc(30),
      sixty: gpaCalc(60),
      ninety: gpaCalc(90),
      all: gpaCalc(daysSinceStart)
    }
  };
};

export default unpackHabit;

// Standalone tests
// Assumes today"s date is 2019-06-24
//
// console.log(unpackHabit("X X X X X", "2019-06-15 03:47:27")); // 5 out of 10 days
// console.log(unpackHabit("XXXXX", "2019-06-15 03:47:27")); // Also 5 out of 10, missing days automatically added to end
// console.log(unpackHabit("          ", "2019-06-15 03:47:27")); // 0 out of 10 days
// console.log(unpackHabit("", "2019-06-15 03:47:27")); // Also 0 out of 10 days
// console.log(unpackHabit("".padEnd(200, " X"), "2018-12-08 03:47:27")); // All GPAs should be 50
// console.log(unpackHabit("".padEnd(24, " XX"), "2019-06-01 03:47:27")); // All GPAs should be 67 (rounded up from 66.66%)
//
// Test with random data to get some diff GPAs
// let randomHabits = "";
// for (let i = 0; i < 200; i++) {
//   randomHabits += Math.random() > 0.4 ? "X" : " ";
// }
// console.log(unpackHabit(randomHabits, "2018-12-08 03:47:27"));
