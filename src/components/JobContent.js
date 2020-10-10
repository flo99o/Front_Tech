import React from "react";
import { Link } from "react-router-dom";
//components
import Button from "../components/Button";

const JobContent = (props) => {
  return (
    <div className="jobpage__content">
      <div className="jobPage__description">
        <h6>Description de l'entreprise</h6>
        <p>{props.description_compagny}</p>
        <h6>Description du poste</h6>
        <p>{props.description_position}</p>
      </div>
      <div className="jobPage__prerequisite">
        <h6>Pré-requis</h6>
        <ul>
          <li>{props.prerequisite}</li>
        </ul>
      </div>

      <div className="side-bar">
        <div className="widget">
          <div className="inner">
            <Button className={"btn btn--grey"} value={"Sauvegarder"} />
            <Link to={"/apply"} className="btn">
              Postuler
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobContent;
