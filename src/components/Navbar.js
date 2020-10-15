import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import iconSet from "../assets/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
//icons
import briefcase from "../assets/logo_nav/mallette.svg";
import registration from "../assets/logo_nav/registration.svg";

const getLogout = () => {
  localStorage.clear();
};

const NavBar = () => {
  const [isLogged, setIsLogged] = useState("");
  const [userID, setUserID] = useState("");

  useEffect(() => {
    if (localStorage) {
      setIsLogged(localStorage.getItem("dataKey"));
      if (isLogged) {
        setUserID(isLogged.userID);
      }
    }

    $(".cross-closed-menu").on("click", () => {
      console.log("hello");
      $(".navigation").hide();
    });
  }, [isLogged, userID]);

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {isLogged ? (
          <li className="navigation__items">
            <Link to={`/user/${userID}`}>
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
        {!isLogged ? (
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
          <li className="navigation__items">
            <Link to="/">
              <IcomoonReact
                iconSet={iconSet}
                color="#444"
                size={15}
                icon="log-out"
                onClick={getLogout()}
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
        <li className="navigation__items">
          <IcomoonReact iconSet={iconSet} color="#444" size={15} icon="help" />
          <p>FAQ </p>
        </li>
      </ul>
      <span className="cross-closed-menu">&#10006;</span>
    </nav>
  );
};

export default NavBar;
