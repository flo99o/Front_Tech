import React, { useState, useEffect }from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
//components
import FormikControl from "../components/formik/FormikControl";
import Button from "../components/Button";


const SignIn = () => {
  let history = useHistory();
  const errormsg = "Obligatoire !"; //mettre dans state contexte
  //let token = null
  const [token, setToken] = useState(null)
  // console.log('token:', token)

  // useEffect( async () => {
  //   await handleAuthentication() 

  // }, [token])

  // variables for formik
  const initialValues = {
    email: "",
    password: "",
  };

  //
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Le format de l'email est incorrect !")
      .required(errormsg),
    password: Yup.string().required(errormsg),
  });

  const parseToken = () =>{
    console.log("inside parseToken");
    return token
  }

  const handleAuthentication = () => {
    //console.log("inside handleAuthentication");
    // if(token){

    //   //localStorage.setItem("token", token);
    //   //return true
    // }
    return new Promise((resolve, reject) => {
      console.log("inside promise");
      parseToken((err, token)=> {
        console.log("inside parseToken of promise");
        if(token){
          console.log();
          localStorage.setItem("token", token)
          return resolve(token)
        }else if (err){
          console.log('err:', err)
          reject(err)
        }

      })


      
      
    })
    
  }

  const onSubmit = async (values) => {
    const url = "http://localhost:4040/signin/signin";
    await axios.post(url, values)
    .then( res =>{
      localStorage.setItem("token",res.headers["x-access-token"])
      const userID = res.data.userID;
      const userType = res.data.userType;
       switch (userType) {
            case "admin":
              history.push(`/admin/${userID}`);
              break;
            case "user":
              history.push(`/user/${userID}`);
              break;
            case "compagny":
              history.push(`/compagny/${userID}`);
              break; 
            default:
              return <Redirect to={"/"} />;
          }
        }
        )}
      
    //await handleAuthentication()
    //console.log("after handleAuth");
    //localStorage.setItem("token",token)
    // setTimeout(() => {

      //history.push("/personalAccount")

    
    
 
      // const getData = {
      //   userID: data.userID,
      //   isLogged: data.isLogged,
      //   userType: data.userType,
      //   compagnyID: data.compagnyID,
      //   compagny_name: data.compagny_name,
      // };

      // localStorage.setItem("dataKey", JSON.stringify(getData))
  
      // if (localStorage.getItem("dataKey")) {
      //   const getUserDetails = JSON.parse(localStorage.getItem("dataKey"));
      //   const userID = getUserDetails.userID;
      //   const userType = getUserDetails.userType
      //   console.log('userType:', userType)
      //   switch (userType) {
      //     case "admin":
      //       history.push(`/admin/${userID}`);
      //       break;
      //     case "user":
      //       history.push(`/user/${userID}`);
      //       break;
      //     case "compagny":
      //       history.push(`/compagny/${userID}`);
      //       break;
      //     default:
      //       return <Redirect to={"/"} />;
      //   }
      // } else {
      //   alert("Error : Impossible de vous connecter");
      //   return <Redirect to={"/"} />;
      // }
    ;
  ;

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
                {(formik) => {
                  // console.log("formik:", formik);
                  return (
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
                  );
                }}
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
