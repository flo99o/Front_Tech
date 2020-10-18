import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-modal";
//components
import Button from "../components/Button";

const JobContent = (props) => {
  //get user's details from "descriptionJob" component
  const offerID = props.idJob;
  //(state) - get this information from back when the user is login
  const getUserID = JSON.parse(localStorage.getItem("dataKey")) || false
  const userID = getUserID.userID || false
  const userType = getUserID.userType || false

  //handle the modal and the response from the back when deleting something
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [response, setResponse] = useState([]);

  //handle opening modale
  const handleModale = () => {
    setmodalIsOpen(true);
  };

  //close the modal and delete the offer
  const handleDeleteOffer = () => {
    setmodalIsOpen(false);
    switch (userType)  {
      case "compagny":
        console.log("offerId: ", offerID);
        const urlCompagny = `http://localhost:5000/compagny/deleteOffer/${offerID}`;
        axios.delete(urlCompagny).then((res) => setResponse(res.data));
        break;
      case "admin":
        console.log("offerId: ", offerID);
        const urlAdmin = `http://localhost:5000/compagny/deleteOffer/${offerID}`;
        axios.delete(urlAdmin).then((res) => setResponse(res.data));
        break;
      case "user":
        console.log("user deleted his apllication");
        const urlUser = `http://localhost:5000/users/deleteApplication/${userID}/${offerID}`;
        axios.delete(urlUser).then((res) => setResponse(res.data));

      default:
        break;
    }
    setInterval(function() {
      window.location.reload()
    }, 300)
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
                <Link to={`/apply/${props.idJob}`} className="btn">
                  Postuler
                </Link>
              )}

              {/* element available from compagnyProfile and/or adminProfile */}
              {props.userType === "compagny" || props.userType === "admin" ? (
                <Link to={`/updatead/${props.idJob}`} className="btn btn--grey">
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

              {/* element available for user only */}
              {props.userType === "user" ? (
                <Button
                  value={"Retirer sa candidature"}
                  className="btn"
                  action={handleModale}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setmodalIsOpen(false)}
        shouldCloseOnOverLayClick={false}
      >
        <div>
          <h2>confirmer la suppression ?</h2>
          <button onClick={() => handleDeleteOffer()}>Oui</button>
        </div>
      </Modal>
    </>
  );
};

export default JobContent;
