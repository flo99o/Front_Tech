import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
//components
import FormikControl from "./formik/FormikControl";
import Button from "./Button";

const Register = () => {
  const errormsg = "Obligatoire !"; //mettre dans state contexte





  const radioOptions = [
    {
      key: "Candidat",
      value: "user",
    },
    { key: "Entreprise", value: "compagny" },
    { key: "Admin", value: "Admin" },
  ];

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    repeat_password: "",
    phone: "",
    logo: "",
    compagny_name: "",
    description_compagny: "",
    type: "",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required(errormsg),
    last_name: Yup.string().required(errormsg),
    type: Yup.string().required(errormsg),
    email: Yup.string()
      .email("Le formt de l'email est incorrect")
      .required(errormsg),
    password: Yup.string().required(errormsg),
    repeat_password: Yup.string()
      .oneOf(
        [Yup.ref("password"), ""],
        "Les mots de passe doivent être indentiques"
      )
      .required(errormsg),
    type: Yup.string().required(errormsg),
    phone: Yup.string().required(errormsg),
    compagny_name: Yup.string().when("type", {
      is: "compagny",
      then: Yup.string().required(errormsg),
    }),
    description_compagny: Yup.string().when("type", {
      is: "compagny",
      then: Yup.string().required(errormsg),
    }),
    
  });

  const onSubmit = (values) => {
    console.log('values:', values)
    const url = "http://localhost:5000/admin/register"; //(allpeople)
    axios.post(url, values);
  }
  
  return (
    <div className="container-signUp">
    <div className="welcome-back">
      <div className="inner-box">
        <h1 className="heading-primary--main">Welcome Back!</h1>
        <p>
          To keep connected with us please login with your personal info
        </p>
        <button id="signIn" className="btn btn--round btn--transparent">
          Sign In
        </button>
      </div>
    </div>
    <div className="create-account">
      <div className="inner-box">
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          //validateOnMount
        >
          {(formik) => (
            <Form className="signIn__form">
              <h1 className="heading-primary--main">Create an account</h1>
              <FormikControl
                control="radio"
                label="Je suis"
                name="type"
                options={radioOptions}
              />
              <FormikControl
              control="input"
              type="text"
              name="first_name"
              placeholder="Prénom"
              />
              <FormikControl
              control="input"
              type="text"
              name="last_name"
              placeholder="Nom"
              />
              <FormikControl
                control="input"
                type="email"
                name="email"
                placeholder="email"
              />
              <FormikControl
                control="input"
                type="password"
                name="password"
                placeholder="mot de passe"
              />
               <FormikControl
                control="input"
                type="password"
                name="repeat_password"
                placeholder="répétez votre mot de passe"
              />
              <FormikControl
              control="input"
              type="tel"
              name="phone"
              placeholder="06 00 00 00 00"
              />
              <FormikControl
              control="input"
              type="text"
              name="logo"
              placeholder="Insérer l'url de votre logo"
              />
              {/* champ for compagny */}
              <FormikControl
              control="input"
              type="text"
              name="compagny_name"
              placeholder="Nom de l'entreprise"
              />
              <FormikControl
              control="textarea"
              name="description_compagny"
              placeholder="Courte description de votre entreprise"
              />


              <Button
                type="submit"
                disabled={!formik.isValid}
                className={"btn btn--round"}
                value={"Sign up"}
              />
            </Form>
          )}
        </Formik>
        
      </div>
    </div>
  </div>
  )
};

export default Register;
