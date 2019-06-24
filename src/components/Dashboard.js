import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDharmachakra } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div>
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
