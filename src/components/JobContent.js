import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-modal"
//components
import Button from "../components/Button";

const JobContent = (props) => {
  const offerID = props.idJob
  console.log(props.userType);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [response, setResponse] = useState([])

  const handleModale = () => {
    setmodalIsOpen(true);
  };

  const handleDeleteOffer = () => {
    const url = `http://localhost:5000/compagny/deleteOffer/${offerID}`
    axios.delete(url)
    .then(res => setResponse(res.data))
  };

  return (
    <>
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
            {/* element available from homepage */}
            {props.userType ? null : (
              <Button className={"btn btn--grey"} value={"Sauvegarder"} />
            )}
            {props.userType ? null : (
              <Link to={"/apply/${props.idJob}"} className="btn">
                Postuler
              </Link>
            )}

            {/* element available from compagnyProfile and/or adminProfile */}
            {props.userType === "compagny" ? (
              <Link to={"/update"} className="btn btn--grey">
                Editer
              </Link>
            ) : null}
            {props.userType === "compagny" || props.userType === "admin" ? (
              <Button
                action={handleModale}
                value={"Supprimer"}
                className="btn"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
    <Modal isOpen={modalIsOpen} onAfterClose={handleDeleteOffer} onRequestClose={() => setmodalIsOpen(false)} shouldCloseOnOverLayClick={false}>
    <div>
      <h2>confirmer la suppression ?</h2>
      <button onClick={() => setmodalIsOpen(false)}>Oui</button>
    </div>
  </Modal>
  </>
  );
};

export default JobContent;
