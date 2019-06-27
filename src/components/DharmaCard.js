import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { getHabits } from "../actions/habitActions";
import Gauge from "../components/Gauge";
import "../App.css";
import "./Dharma.css";

class DharmaCard extends Component {
  render() {
    const { id, habitTitle, categoryId, gpa } = this.props.habit;
    const score = gpa ? gpa[this.props.time] : 0;
    console.log("DC props.time", this.props.time);
    const width = 160;

    const category = Math.min(categoryId, 3) - 1;
    const categoryColor = ["green", "yellow", "red"][category];

    return (
      <div
        style={{
          width: `${width}px`,
          padding: "10px",
          display: "inline-block"
        }}
      >
        <Gauge
          key={id}
          score={score}
          width={width - 20}
          strokeWidth="9"
          bottomLabel={habitTitle}
          color={categoryColor}
          background={categoryColor}
        />
      </div>
    );
    // let dharma;

    // if (category === 1) {
    //   dharma = (
    //     <FontAwesomeIcon icon={faCircle} className="circle-green" size="4x" />
    //   );
    // } else if (category === 2) {
    //   dharma = (
    //     <FontAwesomeIcon icon={faCircle} className="circle-yellow" size="4x" />
    //   );
    // } else if (category === 3) {
    //   dharma = (
    //     <FontAwesomeIcon icon={faCircle} className="circle-red" size="4x" />
    //   );
    // }

    // return (
    //   <div className="dharma-card container">
    //     <div className="dharma-card row">
    //       <div className="dharma-card col">{dharma}</div>
    //     </div>
    //   </div>
    // );
  }
}

const mapStateToProps = state => ({
  habits: state.habits.habits
});

export default connect(
  mapStateToProps,
  { getHabits }
)(DharmaCard);

// class DharmaCard extends Component {
//   render() {
//     // console.log("DharmaCard this.props.habit", this.props.habit);
//     return (
//       <div className="dharma-card container">
//         {this.props.habit.count > 0 ? (
//           <div className="dharmas row">
//             <div className="col">
//               <FontAwesomeIcon
//                 icon={faCircle}
//                 className="circle-green"
//                 size="4x"
//               />

//               {this.props.habit.habit}
//             </div>
//           </div>
//         ) : (
//           <div className="dharmas row">
//             <div className="col">
//               <FontAwesomeIcon
//                 icon={faCircle}
//                 className="circle-red"
//                 size="4x"
//               />

//               {this.props.habit.habit}
//             </div>
//           </div>
//         )}
//       </div>

//       //   {this.props.habit.habit} }
//     );
//   }
// }
