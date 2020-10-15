import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom"
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
//components
import FormikControl from "../components/formik/FormikControl";
import Hero from "../components/Hero";
import Button from "../components/Button";

const getUserDetails = require ("../../src/services/services")

const ApplicationForm = (props) => {
  let history = useHistory()
  const getUserID = JSON.parse(localStorage.getItem("dataKey"));//(state)
  const userID = getUserID.userID //(state)
  
  const offer_id = props.match.params.idJob;
  console.log('offer_id:', offer_id)
  const user_id = userID; 
  console.log('user_id:', user_id)

  //state
  const [myDetails, setMyDetails] = useState([])

  useEffect(() => {
    async function fetchData() {
      const UserDetails = await getUserDetails.getUserDetails(userID);
       setMyDetails(UserDetails)
       }
       fetchData();
  }, [])

  console.log(myDetails);

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
    const url = "http://localhost:5000/users/postApplication";
    await axios.post(url, {...values, user_id, offer_id})
    ;
    history.goBack()
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
