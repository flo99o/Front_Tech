import React, { useState, useEffect} from "react";
import { useHistory, Link } from "react-router-dom"
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import $ from "jquery"
//components
import FormikControl from "../components/formik/FormikControl";
import Button from "../components/Button";

const Register = () => {
  let history = useHistory()
  const errormsg = "Obligatoire !"; //mettre dans state contexte
  const [response, setResponse] = useState([]);
  useEffect(() => {
    localStorage.getItem("userID", response.userID);
  }, [response]);

  const radioOptions = [
    {
      key: "Un candidat",
      value: "user",
    },
    { key: "Une entreprise", value: "compagny" },
  
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
    Usertype: "",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required(errormsg),
    last_name: Yup.string().required(errormsg),
    userType: Yup.string().required(errormsg),
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

  const onSubmit = (values, onSubmitProps) => {
    console.log("values:", values);
    const url = "http://localhost:5000/allpeople/register";
    axios.post(url, values)
    .then(res => {
      setResponse(res.data);
      console.log('hello',res)
      const getData = {
        userID: res.data.userID,
        isLogged: res.data.isLogged,
        type: res.data.userType
        
      };
     
      localStorage.setItem("dataKey", JSON.stringify(getData));
      history.push(`/user/${res.data.userID}`)   
     console.log('hello are you there', getData.userType)
    })
  };
 



  return (
    <div className="container-signUp">
      <div className="welcome-back">
        <div className="inner-box inner-box--blue">
          <h1 className="heading-primary--main">Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <Link to={"/signin"} id="signIn" className="btn btn--round btn--transparent">
            Sign In
          </Link>
        </div>
      </div>
      <div className="create-account">
        <div className="inner-box">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnMount
          >
            {(formik) => (
              <Form className="signIn__form">
                <h1 className="heading-primary--main">Créer un compte</h1>
                <FormikControl
                  options={radioOptions}
                  control="radio"
                  label="Je suis"
                  name="type"
                  className="test"
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="first_name"
                  label="Prénom"
                  placeholder="Anne"
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="last_name"
                  label="Nom"
                  placeholder="Dupont"
                />

                <FormikControl
                  control="input"
                  type="email"
                  name="email"
                  label="E-mail"
                  placeholder="annedupont@gmail.com"
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
                  placeholder="06 00 00 00 00"
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="logo"
                  label="Photo"
                  placeholder="Insérer l'url de votre logo"
                />
                {/* champ for compagny */}
                <div className="isShowInput">
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
                </div>

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
  );
};

export default Register;
