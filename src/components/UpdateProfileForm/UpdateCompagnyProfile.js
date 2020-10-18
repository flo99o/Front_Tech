import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
//components
import FormikControl from "../formik/FormikControl";
import Button from "../Button";

const UpdateCompagnyForm = (props) => {
   //get the user's id form localstorage
  const getUserID = JSON.parse(localStorage.getItem("dataKey"));
  const userID = getUserID.userID
  // get user's details from userProfile component
  const userDetails = props.userDetails


  const values = {
    first_name: userDetails.first_name,
    last_name: userDetails.last_name,
    email: userDetails.email,
    phone: userDetails.phone,
    logo: userDetails.logo,
    description_compagny: userDetails.description_compagny,
    compagny_name: userDetails.compagny_name,
  };

  //set rules for validating of the field's form
  const validationSchema = Yup.object({
    first_name: Yup.string(),
    last_name: Yup.string(),
    type: Yup.string(),
    email: Yup.string().email("Le format de l'email est incorrect"),
    password: Yup.string(),
    repeat_password: Yup.string().oneOf(
      [Yup.ref("password"), ""],
      "Les mots de passe doivent être indentiques"
    ),
    phone: Yup.string(),
    description_compagny: Yup.string(),
    compagny_name: Yup.string(),
  });

  //send new user's details to the BDD
  const onSubmit = async (values) => {
    console.log("values:", values);
    const url = `http://localhost:5000/allpeople/updateProfile/${userID}`;
    await axios.put(url, values);
    window.location.reload()
  };

  return (
    <div>
      {!values ? null : (
        <Formik
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {(formik) => (
            <Form className="signIn__form">
              <FormikControl
                control="input"
                type="text"
                name="first_name"
                label="Prénom"
              />
              <FormikControl
                control="input"
                type="text"
                name="last_name"
                label="Nom"
              />
              <FormikControl
                control="input"
                type="email"
                name="email"
                label="E-mail"
              />
              <FormikControl
                control="input"
                type="password"
                name="password"
                label="mot de passe"
                placeholder="********"
              />
              <FormikControl
                control="input"
                type="password"
                name="repeat_password"
                label="répétez votre mot de passe"
                placeholder="********"
              />
              <FormikControl
                control="input"
                type="tel"
                name="phone"
                label="Téléphone"
              />
              <FormikControl
                control="input"
                type="text"
                name="logo"
                label="Photo"
              />

              <FormikControl
                control="input"
                type="text"
                name="compagny_name"
                label="Nom de l'entreprise"
                placeholder="Microsoft"
              />
              <FormikControl
                control="textarea"
                name="description_compagny"
                label="Description de votre entreprise"
                placeholder="Courte description de votre entreprise"
              />

              <Button
                type="submit"
                disabled={!formik.isValid}
                className={"btn btn--round"}
                value={"Modifier mon profil"}
              />
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default UpdateCompagnyForm;
