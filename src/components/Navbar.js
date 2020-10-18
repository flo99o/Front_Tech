import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import $ from "jquery";
import iconSet from "../assets/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
//icons
import briefcase from "../assets/logo_nav/mallette.svg";
import registration from "../assets/logo_nav/registration.svg";


const NavBar = () => {
  let history = useHistory()
  
  //get the user's id and type form localstorage
  const getUserID = JSON.parse(localStorage.getItem("dataKey")) || false
  const userID = getUserID.userID || false
  const userType = getUserID.userType || false

  
  useEffect(() => {
    $( ".cross-closed-menu, li.navigation__items" ).on("click", () => {
      $(".navigation").hide();
    });
  }, [userID]);

  const getLogout = () => {
    localStorage.clear();
    alert("vous avez étez déconnecté")
    setInterval(function() {
      history.push("/")
      window.location.reload()
    }, 300)
  };
  


  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {userID ? (
          <li className="navigation__items">
            <Link to={`/${userType}/${userID}`}>
              <IcomoonReact
                iconSet={iconSet}
                color="#444"
                size={15}
                icon="user"
              />
              <p>Mon compte </p>
            </Link>
          </li>
        ) : null}
        {!userID ? (
          <li className="navigation__items">
            <Link to="/signin">
              <IcomoonReact
                iconSet={iconSet}
                color="#444"
                size={15}
                icon="login"
              />
              <p>Se connecter </p>
            </Link>
          </li>
        ) : (
          <li onClick={() => getLogout()} className="navigation__items">
            <Link to="/">
              <IcomoonReact
                iconSet={iconSet}
                color="#444"
                size={15}
                icon="log-out"
              />
              <p>Se déconnecter </p>
            </Link>
          </li>
        )}

        <li className="navigation__items">
          <Link to={"/register"}>
            <img src={registration} alt="malette" />
            <p>Créer un compte </p>
          </Link>
        </li>
        <li className="navigation__items">
          <Link to={"/"}>
            <img src={briefcase} alt="malette" />
            <p>Les offres d'emplois </p>
          </Link>
        </li>
      </ul>
      <span className="cross-closed-menu">&#10006;</span>
    </nav>
  );
};

export default NavBar;
