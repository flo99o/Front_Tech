import React from "react";
//components
import Hero from "../components/Hero";
import Button from "../components/Button";

const ApplicationForm = () => {
  return (
    <div className="applicationForm">
      <Hero title="Vos informations" subtitle={""} />
      <div className="form-box">
        <form action="" className="createAd-form">
          <div className="createAd-form__inner">
            <p className="createAd-form__block">
              <label for="title">Nom</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="ex: Anne DUPONT"
              />
            </p>
            <p className="createAd-form__block">
              <label for="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="ex: annedupont@domaine.com"
              />
            </p>
            <p className="createAd-form__block">
              <label for="phone">Téléphone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="ex: Anne DUPONT"
              />
            </p>

            <p className="createAd-form__block">
              <label for="description">Lettre de motivation</label>
              <textarea
                name="compagny"
                id="description"
                placeholder="Pourquoi souhaitez-vous nous rejoindre ?"
              />
            </p>
            <Button className={"btn"} value={"Envoyer"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
