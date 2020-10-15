import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
//components
import FormikControl from "../components/formik/FormikControl";
import Hero from "../components/Hero";
import Button from "../components/Button";

const CreatedAd = () => {
  let history = useHistory();
  //(state) - get this information from back when the user is login
  const getUserID = JSON.parse(localStorage.getItem("dataKey"));
  const userID = getUserID.userID;
  const compagnyID = getUserID.compagnyID;

  /**
   * Formik propreties
   */

  //for job_name select element
  const dropdownOptionsJob = [
    {
      key: "Choissisez un métier",
      value: "",
      selected: true,
      hidden: true,
      disabled: true,
    },
    { key: "Développeur frontend", value: "Développeur frontend" },
    { key: "Développeur backend", value: "Développeur backend" },
    { key: "Designer", value: "Designer" },
  ];
  // for contract select element
  const dropdownOptionsContract = [
    {
      key: "Type de contrat",
      value: "",
      selected: true,
      hidden: true,
      disabled: true,
    },
    { key: "Alternance", value: "Alternance" },
    { key: "CDI", value: "CDI" },
    { key: "CDD", value: "CDD" },
    { key: "Stage", value: "Stage" },
  ];
  const initialValues = {
    job_name: "",
    description_position: "",
    location: "",
    wage: "",
    contract: "",
    prerequisite: "",
  };
  const validationSchema = Yup.object({
    job_name: Yup.string().required("Obligatoire !"),
    description_position: Yup.string().required("Obligatoire !"),
    location: Yup.string().required("Obligatoire !"),
    contract: Yup.string().required("Obligatoire !"),
  });
  const onSubmit = async (values, onSubmitProps) => {
    const url = "http://localhost:5000/compagny/createad";
    await axios.post(url, { ...values, userID, compagnyID });
    onSubmitProps.resetForm();
    history.goBack();
  };

  return (
    <div className="createAd">
      <Hero title={"Créer une offre"} subtitle={""} />
      <div className="form-box">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnMount
        >
          {(formik) => (
            <Form className="createAd-form">
              <div className="createAd-form__inner">
                <FormikControl
                  control="select"
                  label="Métier"
                  name="job_name"
                  options={dropdownOptionsJob}
                />

                <FormikControl
                  control="textarea"
                  label="Description du poste"
                  name="description_position"
                  placeholder="Décrivez le poste"
                />
                <FormikControl
                  control="textarea"
                  label="Pré-requis"
                  name="prerequisite"
                  placeholder="Quels sont les pré-requis pour le poste"
                />
                <FormikControl
                  control="select"
                  label="Type de contrat"
                  name="contract"
                  options={dropdownOptionsContract}
                />
                <FormikControl
                  control="input"
                  type="range"
                  label="Salaire (par mois)"
                  name="wage"
                  min="500"
                  max="8000"
                  step="100"
                  placeholder="Count"
                />
                <FormikControl
                  control="input"
                  label="Lieu"
                  name="location"
                  placeholder="Lieu du poste"
                />
                <Button
                  type="submit"
                  disabled={!formik.isValid}
                  className={"btn"}
                  value={"Créer l'offre"}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreatedAd;
