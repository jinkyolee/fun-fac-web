import React from "react";
import clueImage from "../../images/trigger.jpg";
import clueImage2 from "../../images/trigger2.jpg";
import TriggerItem from "../components/TriggerItem";
import "../../css/routes/CluePage.css";

const CluePage = () => {
  document.title = "펀팩 | 기록실";

  return (
    <div className="image-container">
      <ol>
        <TriggerItem image={clueImage} />
        <TriggerItem image={clueImage2} />
      </ol>
    </div>
  );
};

export default CluePage;
