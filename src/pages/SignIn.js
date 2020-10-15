import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
//components
import FormikControl from "../components/formik/FormikControl";
import Button from "../components/Button";

const SignIn = () => {
  let history = useHistory();
  const errormsg = "Obligatoire !"; //mettre dans state contexte
  const [response, setResponse] = useState([]);

  useEffect(() => {
    localStorage.getItem("userID", response.userID);
  }, [response]);

  // variables for formik
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
    console.log("values:", values);
    const url = "http://localhost:5000/signin/signin";
    await axios.post(url, values).then((res) => {
      setResponse(res.data);
      console.log('rrr',res)
      const getData = {
        userID: res.data.userID,
        isLogged: res.data.isLogged,
        type: res.data.userType
      };
      localStorage.setItem("dataKey", JSON.stringify(getData));
      history.push(`/user/${res.data.userID}`);
    });
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

export default SignIn;
