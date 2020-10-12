import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
//components
import FormikControl from "../components/formik/FormikControl";

import Hero from "../components/Hero";
import Button from "../components/Button";

const ApplicationForm = (props) => {
  const offerID = props.match.params.id;
  const userID = 4; //(state)

  const initialValues = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    cover_letter: "",
  };
  const validationSchema = Yup.object({
    first_name: Yup.string().required("Obligatoire !"),
    last_name: Yup.string().required("Obligatoire !"),
    phone: Yup.string().required("Obligatoire !"),
    cover_letter: Yup.string().required("Obligatoire !"),
    email: Yup.string()
      .email("Le format de l'email est incorrect !")
      .required("Obligatoire !"),
  });
  const onSubmit = async (values) => {
    console.log("values: ", values);
    const url = "http://localhost:5000/users/postApplication";
    await axios.post(url, {...values, userID, offerID});
  };
  return (
    <div className="applicationForm">
      <Hero title="Postuler" subtitle={""} />
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
                  control="input"
                  type="text"
                  label="Prénom"
                  name="first_name"
                  placeholder="Anne"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="Nom"
                  name="last_name"
                  placeholder="Dupont"
                />
                <FormikControl
                  control="input"
                  type="email"
                  label="E-mail"
                  name="email"
                  placeholder="annedupont@domaine.com"
                />
                <FormikControl
                  control="input"
                  type="phone"
                  label="Téléphone"
                  name="phone"
                  placeholder="Anne"
                />
                <FormikControl
                  control="textarea"
                  label="Lettre de motivation"
                  name="cover_letter"
                  placeholder="pourquoi souhaitez-vous nous rejoindre"
                />
                <Button
                  type="submit"
                  disabled={!formik.isValid}
                  className={"btn"}
                  value={"Envoyer"}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ApplicationForm;
