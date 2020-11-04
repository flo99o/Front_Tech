// Packages
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import decode from "jwt-decode";
// Components
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import JobPage from "./pages/JobPage";
// import Footer from "./components/Footer";
import CreateAd from "./pages/CreateAd";
import ApplicationForm from "./pages/ApplicationForm";
import CompagnyProfile from "./pages/CompagnyProfile";
import AdminProfile from "./pages/AdminProfile";
import UserProfile from "./pages/UserProfile";
import Register from "./pages/Register";
import UpdateAd from "./pages/UpdateAd";
import Unauthorized from "./components/Unauthorized";
import ErrorPage from "./pages/ErrorPage";
import Application from "./pages/Application";

import {isLogged, userDetails} from "./services/services"

export const UserContext = React.createContext();

const App = () => {
  // const isLogged = () => {
  //   // 1. stock token from localstorage
  //   const token = localStorage.getItem("token");
  //   // 2. verify if there is a token
  //   if (!token) {
  //     return false;
  //   }
  //   // 3. verify if the token has been expired
  //   try {
  //     const { exp } = decode(token);
  //     if (exp < new Date().getTime() / 1000) {
  //       return false;
  //     }
  //   } catch (e) {
  //     return false;
  //   }
  //   const { userType } = decode(token);
  //   console.log(userType);
  //   return userType;
  // };

  isLogged()
console.log("result userdetails" + userDetails().userID + userDetails());

const userID = userDetails().userID;
console.log('userID:', userID)


  //Give access to the routes only for user & admin
  const UserRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isLogged() === "admin" || isLogged() === "user"? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/unauthorized" }} />
        )
      }
    />
  );

  // Give access to the routes only for compagny & admin
  const CompagnyRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isLogged() === "admin" || isLogged() === "compagny" ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/unauthorized" }} />
        )
      }
    />
  );

  // Give access to the routes only for compagny & admin
  const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isLogged() === "admin" ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/unauthorized" }} />
        )
      }
    />
  );

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/job/:id" component={JobPage} />
          <Route
            exact
            path="/apply/:offer_id/:compagny_id"
            component={ApplicationForm}
          />
          <CompagnyRoute
            exact
            path="/compagny/:id"
            component={CompagnyProfile}
          />
          <CompagnyRoute exact path="/application" component={Application} />
          <CompagnyRoute exact path="/createad" component={CreateAd} />
          <CompagnyRoute exact path="/updatead/:id" component={UpdateAd} />
          <AdminRoute exact path="/admin/:id" component={AdminProfile} />
          <UserRoute exact path="/user/:id" component={UserProfile} />
          <Route exact path="/unauthorized" component={Unauthorized} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </>
  );
};

// hello

export default App;
