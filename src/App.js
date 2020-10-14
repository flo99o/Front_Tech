// Packages
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import JobPage from "./pages/JobPage";
import Footer from "./components/Footer";
import CreateAd from "./pages/CreateAd";
import ApplicationForm from "./pages/ApplicationForm";
import CompagnyProfile from "./pages/CompagnyProfile";
import AdminProfile from "./components/AdminProfile";
import UserProfile from "./pages/UserProfile";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { Unauthorized } from "./components/Unauthorized";


const App = () => {
 

  return (
    <div className="global_container">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/connexion" component={SignIn} />
          <Route exact path="/job/:id" component={JobPage} />
          <ProtectedRoutes exact path="/compagny/:id" component={CompagnyProfile} />
          <Route exact path="/admin/" component={AdminProfile} />
          <ProtectedRoutes exact path="/user/:id" component={UserProfile} />
          <Route exact path="/createad" component={CreateAd} />
          <Route exact path="/apply/:offerID" component={ApplicationForm} />
          <Route exact path="/unauthorized" component ={Unauthorized}/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
