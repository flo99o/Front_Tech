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
  
  

  const getUserID = JSON.parse(localStorage.getItem("dataKey")) || false; //(state)
  const user_id = getUserID.userID || "";
  console.log('user_id:', user_id)

  // offer's id of the offer which we went to apply to
  const offer_id = props.match.params.offerID;

  //state
  const [myDetails, setMyDetails] = useState([]);
  //create an id for user(visitor) which have not user's id 
  const [lastUserID, setLastUserID] = useState([])

  useEffect(() => {

    const getLastUser = async () => {
      const url = "http://localhost:5000/users/lastUserID"
      const results = await axios.get(url);
      setLastUserID(results.data[0].userID + 1)
    }
    getLastUser()

    if(user_id){

      async function fetchData() {
        const userDetails = await getUserDetails.getUserDetails(user_id);
        setMyDetails(userDetails);
      }
      fetchData();
    }
  }, []);

  console.log("last: ", lastUserID);

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  cover_letter: ""
}
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
    if(user_id){
      const url = "http://localhost:5000/users/postApplication";
      await axios.post(url, { ...values, user_id, offer_id });
    }else {
      const url = "http://localhost:5000/users/postApplication";
      await axios.post(url, { ...values, offer_id, user_id: lastUserID })
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
        )}


        {!getUserID ?  <Formik
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
            
          </Formik> : null}
      </div>
    </div>
  );
};

export default ApplicationForm;
