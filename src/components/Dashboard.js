import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDharmachakra } from "@fortawesome/free-solid-svg-icons";
import "./Dharma.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <FontAwesomeIcon
          icon={faDharmachakra}
          className="dharmachakra"
          size="7x"
        />
      </div>
      <div>Chart here</div>
      <div>link buttons here</div>
    </div>
  );
};

export default Dashboard;
