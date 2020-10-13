// Packages
import React from "react";
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
import Register from "./pages/Register"


const App = () => {
  return (
    <div className="global_container">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/job/:id" component={JobPage} />
          <Route exact path="/compagny/:id" component={CompagnyProfile} />
          <Route exact path="/admin/" component={AdminProfile} />
          <Route exact path="/user/:id" component={UserProfile} />
          <Route exact path="/createad" component={CreateAd} />
          <Route exact path="/apply/:offerID" component={ApplicationForm} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
