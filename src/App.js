// Packages
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
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

export const UserContext = React.createContext()

const App = () => {
  const getIsLogged = JSON.parse(localStorage.getItem("dataKey")) || false;
  const isLogged = getIsLogged.isLogged || false;
  const getUserType = JSON.parse(localStorage.getItem("dataKey")) || false;
  const userType = getUserType.userType || false;

  //Give access to the routes only for user & admin
  const UserRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isLogged && (userType === "user" || userType === "admin") ? (
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
        isLogged && (userType === "compagny" || userType === "admin") ? (
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
        isLogged && userType === "admin" ? (
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
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/job/:id" component={JobPage} />
          <Route exact path="/apply/:offer_id/:compagny_id" component={ApplicationForm} />

          <CompagnyRoute
          forceRefresh
            exact
            path="/compagny/:id"
            component={CompagnyProfile}
          />
          <CompagnyRoute exact path="/application" component={Application} />
          <CompagnyRoute exact path="/createad" component={CreateAd} />
          <CompagnyRoute forceRefresh exact path="/updatead/:id" component={UpdateAd} />
          <AdminRoute forceRefresh exact path="/admin/:id" component={AdminProfile} />
          <UserRoute forceRefresh  exact path="/user/:id" component={UserProfile} />
          <Route exact path="/unauthorized" component={Unauthorized}/>
          <Route component={ErrorPage} />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </>
  );
};

// hello

export default App;
