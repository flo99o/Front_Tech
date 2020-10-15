// Packages
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import JobPage from "./pages/JobPage";
// import Footer from "./components/Footer";
import CreateAd from "./pages/CreateAd";
import ApplicationForm from "./pages/ApplicationForm";
import CompagnyProfile from "./pages/CompagnyProfile";
import AdminProfile from "./components/AdminProfile";
import UserProfile from "./pages/UserProfile";
import Register from "./pages/Register"
import Unauthorized  from "./components/Unauthorized";
import ErrorPage from "./pages/ErrorPage"


const App = () => {
  const getIsLogged  = JSON.parse(localStorage.getItem('dataKey')) || false
  const isLogged = getIsLogged.isLogged || false
  const getUserType = JSON.parse(localStorage.getItem('dataKey'))   || false
  const userType = getUserType.userType || false

  

  return (
    <div className="global_container">

      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/job/:id" component={JobPage} />
          <Route exact path="/compagny/:id" component={isLogged && (userType === 'compagny' || userType ==='admin') ? CompagnyProfile : Unauthorized} userType={userType} />
          <Route exact path="/admin/" component={isLogged && (userType === 'admin')? AdminProfile : Unauthorized} userType={userType} /> 
          <Route exact path="/user/:id" component={isLogged && (userType === 'user' || userType ==='admin') ? UserProfile : Unauthorized}  userType={userType}/>
          <Route exact path="/createad" component={CreateAd} /> 
          <Route exact path="/apply/:offerID" component={ApplicationForm} />    
          <Route component={ErrorPage}/>    
        </Switch>

      
      </Router>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
