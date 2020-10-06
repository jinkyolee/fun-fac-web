import React from "react";

const TriggerItem = ({ image }) => {
  return (
    <React.Fragment>
      <li>
        <div className="trigger-container">
          <br />
          <img src={image} alt="clue" className="trigger-image" />
        </div>
      </li>
      <br />
    </React.Fragment>
  );
};

export default TriggerItem;
