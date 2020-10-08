import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
//components
import FormikControl from "../components/formik/FormikControl";
import Hero from "../components/Hero";
import Button from "../components/Button"

const CreatedAd = () => {
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
  const initialValues = {
    job_name: "",
    name: "",
    desc_compagny: "",
    desc_position: "",
    supervisor: "",
    wage: "",
    limit_date: null,
  };
  const validationSchema = Yup.object({
    job_name: Yup.string().required("Obligatoire !"),
    name: Yup.string().required("Obligatoire!"),
    desc_compagny: Yup.string().required("Obligatoire !"),
    desc_position: Yup.string().required("Obligatoire !"),
    supervisor: Yup.string().required("Obligatoire"),
    //wage: Yup.number().required('Obligatoire'),
    limit_date: Yup.date().required("Obligatoire").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Form data: ", values);
    console.log("Saved data: ", JSON.parse(JSON.stringify(values)));
  };
  return (
    <div className="createAd">
      <Hero title={"Créer une offre"} subtitle={""} />
      <div className="form-box">

      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
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
              name="name"
              placeholder="Entrez le nom de votre Entreprise"
            />
            <FormikControl
              control="textarea"
              label="Description de l'entreprise"
              name="desc_compagny"
              placeholder="Ecrivez une courte description de votre entreprise"
            />
            <FormikControl
              control="textarea"
              label="Description du poste"
              name="desc_position"
              placeholder="Décrivez le poste"
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
              control="date"
              label="date limite de candidature"
              name="limit_date"
            />
             <Button type="submit" className={"btn"} value={"Créer l'offre"} />
            </div>
          </Form>
        )}
      </Formik>
      </div>
    </div>
  );
};

export default CreatedAd;
