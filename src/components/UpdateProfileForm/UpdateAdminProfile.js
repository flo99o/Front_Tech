import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
//components
import FormikControl from "../formik/FormikControl";
import Button from "../Button";

const UpdateAdminProfile = (props) => {
  const getUserID = JSON.parse(localStorage.getItem("dataKey"));
  const userID = getUserID.userID
  const [initialValues, setInitialValues] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/allpeople/userDetails/${userID}`;
    axios
      .get(url)
      .then((result) => {
        setInitialValues(result.data[0]);
      })
      .catch("error");
  }, []);

  const values = {
    first_name: initialValues.first_name,
    last_name: initialValues.last_name,
    email: initialValues.email,
    phone: initialValues.phone,
    logo: initialValues.logo,
  };

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
  });

  const onSubmit = async (values) => {
    console.log("values:", values);
    const url = `http://localhost:5000/allpeople/updateProfile/${userID}`;
    await axios.put(url, values);
  };
  return (
    <div>
      {!initialValues ? null : (
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

export default UpdateAdminProfile;
