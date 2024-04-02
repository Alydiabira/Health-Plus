import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InformationCard(props) {
  return (
    <div className="maregion-cards">
      <span className="maregion-card-icon">
        <FontAwesomeIcon className="maregion-fa-icon" icon={props.icon} />
      </span>
      <p className="maregion-card-title">{props.title}</p>
      <p className="maregion-card-description">{props.description}</p>
    </div>
  );
}

export default InformationCard;
