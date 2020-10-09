import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
//components
import FormikControl from "../components/formik/FormikControl";
import Button from "../components/Button";
import Register from "../components/Register"

const UserPage = () => {
  const errormsg = "Obligatoire !"; //mettre dans state contexte
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Le format de l'email est incorrect !")
      .required(errormsg),
    password: Yup.string().required(errormsg),
  });

  const onSubmit = async (values) => {
    console.log("submission");
    const url = "http://localhost:5000/allpeople/signin";
    await axios.post(url, values);
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
                    <h1 className="heading-primary--main">Sign in</h1>
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
              <button
                id="signUp"
                className="btn btn--round btn--transparent"
                // onClick={() => getSignIn()}
              >
                sign up
              </button>
            </div>
          </div>
        </div>
        <Register />
      </div>
    </div>
  );
};

export default UserPage;
