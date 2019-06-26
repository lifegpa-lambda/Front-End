import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { getHabits } from "../actions/habitActions";
import "../App.css";
import "./Dharma.css";

class DharmaCard extends Component {
  render() {
    console.log("DharmaCard this.props.habit", this.props.habit);
    const category = this.props.habit.categoryId;
    let dharma;

    if (category === 1) {
      dharma = (
        <FontAwesomeIcon icon={faCircle} className="circle-green" size="4x" />
      );
    } else if (category === 2) {
      dharma = (
        <FontAwesomeIcon icon={faCircle} className="circle-yellow" size="4x" />
      );
    } else if (category === 3) {
      dharma = (
        <FontAwesomeIcon icon={faCircle} className="circle-red" size="4x" />
      );
    }

    return (
      <div className="dharma-card container">
        <div className="dharma-card row">
          <div className="dharma-card col">{dharma}</div>
        </div>
      </div>
    );
  }
}

DharmaCard.propTypes = {
  getHabits: PropTypes.func,
  habit: PropTypes.object
};

export default connect(
  null,
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
