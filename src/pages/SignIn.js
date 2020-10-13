import React, { useState }from "react";
import { Link } from "react-router-dom"
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
//components
import FormikControl from "../components/formik/FormikControl";
import Button from "../components/Button";
import Register from "./Register"


const UserPage = () => {
  const errormsg = "Obligatoire !"; //mettre dans state contexte
  const initialValues = {
    email: "",
    password: "",
  };
  const [response, setResponse] = useState([])
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Le format de l'email est incorrect !")
      .required(errormsg),
    password: Yup.string().required(errormsg),
  });

console.log('response: ', response);
console.log('hello');
  const onSubmit = async (values) => {
    console.log("submission");
    const url = "http://localhost:5000/signin/signin";
    await axios.post(url, values)
    .then(res => setResponse(res.data));
  };

  return (
    <div className="container--connexion">
      <div className="box">
        <div className="container-signIn">
          <div className="signIn">
            <div className="inner-box">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnMount
              >
                {(formik) => (
                  <Form className="signIn__form">
                    <h1 className="heading-primary--main">Se connecter</h1>
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
                      placeholder="password"
                    />

                    <Button
                      type="submit"
                      disabled={!formik.isValid}
                      className={"btn btn--round"}
                      value={"Sign In"}
                    />
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="hello-friend">
            <div className="inner-box inner-box--blue">
              <h1 className="heading-primary--main">Hello Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <Link
              to={"/register"}
                className="btn btn--round btn--transparent"
              >
                sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
