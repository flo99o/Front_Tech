import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
//components
import FormikControl from "../formik/FormikControl";
import Button from "../Button";

const UpdateUserProfile = (props) => {
  const userID = 8; //(state)
  const [myDetails, setMyDetails] = useState([]);

  useEffect(() => {
    const getMyDetails = async () => {
      const url = `http://localhost:5000/allpeople/myDetails/${userID}`;
      const result = await axios.get(url);
      setMyDetails(result.data);
    };
    getMyDetails();

    
  }, []);
  let first_name, last_name, email, logo, phone

  if (myDetails.length) {
    const details = myDetails[0];
   first_name = details.first_name
    console.log('first_name:', first_name) //output: Manon
    
  }
  
  console.log('first_name:', first_name) // output Manon
  let initialValues = {
    first_name: first_name,
    last_name: 'dupont',
    email: 'manondupont@gmail.com',
    phone: '0600000000',
    logo: 'non renseigné',
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
    const url = `http://localhost:5000/users/updateProfile/${userID}`;
    await axios.put(url, values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
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
    </div>
  );
};

export default UpdateUserProfile;
