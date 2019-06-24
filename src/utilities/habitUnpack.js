// const moment = require("moment");
import moment from "moment";

// Given a string `trackingData` where a space indicates a day a habit was not kept,
// and any other character indicates kept, and a date `creationDate` in YYYY-MM-DD HH:MM:SS format,
// process the string to add empty data for missing days since last update, and calculate GPA (percentage)
// for how many days habit was successfully kept over time periods of 30, 60, 90 and All. Return an object
// containing the processed string and GPA for all time periods.
//
// Example:
//
// console.log(habitUnpack("X X X X X", "2019-06-15 03:47:27")); // 5 out of 10 days if today is 24 June 2019
//
// {
//   trackingdata: "X X X X X ",
//   GPA: { thirty: 50, sixty: 50, ninety: 50, all: 50 }
// }

const habitUnpack = (trackingData, creationDate) => {
  // Calculate days between start date and today, rounded up to the next whole day

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize time to midnight
  const start = moment(creationDate.split(" ")[0]); // Normalize to midnight by only using the date
  const daysSinceStart =
    Math.ceil(moment.duration({ from: start, to: today }).asDays()) + 1;

  // If a day or more has passed since stats were last updated, add empty stats for the missing days
  trackingData = trackingData.padEnd(daysSinceStart);

  // Helper function for determining GPA
  const gpaCalc = timeSpan => {
    timeSpan = timeSpan > daysSinceStart ? daysSinceStart : timeSpan;
    const daysKept = () => {
      return daysSinceStart <= timeSpan
        ? trackingData.replace(/\s/g, "").length
        : trackingData
            .substring(trackingData.length - timeSpan)
            .replace(/\s/g, "").length;
    };
    return Math.round((daysKept() * 100) / timeSpan);
  };

  console.log(`Days tracked: ${trackingData.length}`);
  return {
    trackingData: trackingData,
    GPA: {
      thirty: gpaCalc(30),
      sixty: gpaCalc(60),
      ninety: gpaCalc(90),
      all: gpaCalc(daysSinceStart)
    }
  };
};

// Standalone tests
// Assumes today"s date is 2019-06-24
//
// console.log(habitUnpack("X X X X X", "2019-06-15 03:47:27")); // 5 out of 10 days
// console.log(habitUnpack("XXXXX", "2019-06-15 03:47:27")); // Also 5 out of 10, missing days automatically added to end
// console.log(habitUnpack("          ", "2019-06-15 03:47:27")); // 0 out of 10 days
// console.log(habitUnpack("", "2019-06-15 03:47:27")); // Also 0 out of 10 days
// console.log(habitUnpack("".padEnd(200, " X"), "2018-12-08 03:47:27")); // All GPAs should be 50
// console.log(habitUnpack("".padEnd(24, " XX"), "2019-06-01 03:47:27")); // All GPAs should be 67 (rounded up from 66.66%)
//
// Test with random data to get some diff GPAs
// let randomHabits = "";
// for (let i = 0; i < 200; i++) {
//   randomHabits += Math.random() > 0.4 ? "X" : " ";
// }
// console.log(habitUnpack(randomHabits, "2018-12-08 03:47:27"));
