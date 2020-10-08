import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from 'axios'
//components
import FormikControl from "../components/formik/FormikControl";
import Hero from "../components/Hero";
import Button from "../components/Button";
import { useState } from "react";

const CreatedAd = () => {
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
    compagny_name: "",
    desc_compagny: "",
    desc_position: "",
    supervisor: "",
    location: "",
    wage: "",
    contract: "",
    logo:""
  };
  const validationSchema = Yup.object({
    job_name: Yup.string().required("Obligatoire !"),
    compagny_name: Yup.string().required("Obligatoire!"),
    desc_compagny: Yup.string().required("Obligatoire !"),
    desc_position: Yup.string().required("Obligatoire !"),
    supervisor: Yup.string().required("Obligatoire !"),
    //wage: Yup.string().required('Obligatoire !'),
    location: Yup.string().required("Obligatoire !"),
    contract: Yup.string().required("Obligatoire !"),
  });
  const onSubmit = async (values, onSubmitProps) =>  {
    const url = 'http://localhost:5000/admin/offers'
    await axios.post(url,values)
    //onSubmitProps.resetForm()
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
                  control="input"
                  type="text"
                  label="Nom de l'entreprise"
                  name="compagny_name"
                  placeholder="Entrez le nom de votre Entreprise"
                />
                <FormikControl
                  control="textarea"
                  label="Description de l'entreprise"
                  name="desc_compagny"
                  placeholder="Ecrivez une courte description de votre entreprise"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="Logo de l'entreprise"
                  name="logo"
                  placeholder="saisissez l'url de l'adresse du logo "
                />
                <FormikControl
                  control="textarea"
                  label="Description du poste"
                  name="desc_position"
                  placeholder="Décrivez le poste"
                />
                <FormikControl
                  control="select"
                  label="Type de contrat"
                  name="contract"
                  options={dropdownOptionsContract}
                />
                <FormikControl
                  control="input"
                  label="Nom du responsable"
                  name="supervisor"
                  placeholder="Nom de la personne en charge du recrutement"
                />
                <FormikControl
                  control="input"
                  type="range"
                  label="Salaire (par mois)"
                  name="wage"
                  min="500"
                  max="8000"
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
