import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
//components
import FormikControl from "../components/formik/FormikControl";
import Hero from "../components/Hero";
import Button from "../components/Button";

const getUserDetails = require("../../src/services/services");

const ApplicationForm = (props) => {
  let history = useHistory();
  const {offer_id, compagny_id} = props.match.params
  console.log('offer_id:', offer_id)

  // get user'id from localstorage
  const getUserID = JSON.parse(localStorage.getItem("dataKey")) || false; //(state)
  const user_id = getUserID.userID || "";
  
  //store user's details
  const [myDetails, setMyDetails] = useState([]);
  //store visitor's id
  const [lastUserID, setLastUserID] = useState([]);

  useEffect(() => {
    //create a id for visitor which wants to apply to a job
    const getLastUser = async () => {
      const url = "http://localhost:4040/users/lastUserID";
      const results = await axios.get(url);
      setLastUserID(results.data[0].userID + 1);
    };
    getLastUser();

    if (user_id) {
      async function fetchData() {
        const userDetails = await getUserDetails.getUserDetails(user_id);
        setMyDetails(userDetails);
      }
      fetchData();
    }
  }, [user_id]);


  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
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
    if (user_id) {
      console.log("see props: ", user_id, compagny_id,lastUserID);
      const url = "http://localhost:4040/users/postApplication";
      await axios.post(url, { ...values, user_id, offer_id, compagny_id });
    } else {
      const url = "http://localhost:4040/users/postApplication";
      await axios.post(url, { ...values, offer_id, user_id: lastUserID, compagny_id });
    }
    history.goBack();
  };

  return (
    <div className="applicationForm">
      <Hero title="Postuler" subtitle={""} />
      <div className="form-box">
        {!myDetails.phone ? null : (
          <Formik
            initialValues={myDetails || ""}
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
                    value={myDetails.first_name}
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="Nom"
                    name="last_name"
                    placeholder="Dupont"
                    value={myDetails.last_name}
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
        )}

        {!getUserID ? (
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
        ) : null}
      </div>
    </div>
  );
};

export default ApplicationForm;
