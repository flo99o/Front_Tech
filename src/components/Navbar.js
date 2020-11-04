import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import $ from "jquery";
import iconSet from "../assets/selection.json";
import IcomoonReact from "icomoon-react";
import decode from "jwt-decode";
//icons
import briefcase from "../assets/logo_nav/mallette.svg";
import registration from "../assets/logo_nav/registration.svg";


const NavBar = () => {
  let history = useHistory();

  const [token, setToken] = useState(null);
  const [userID, setUserID] = useState("");
  const [userType, setUserType] = useState("");
  
  
  useEffect(() => {
    $(".cross-closed-menu, li.navigation__items").on("click", () => {
      $(".navigation").hide();
    });
    
    if (localStorage) {
      setToken(localStorage.getItem("token"));
    }
    if (token) {
      const { userID, userType } = decode(token);
      setUserID(userID);
      setUserType(userType);
    }
  }, [userID, token]);

  const getLogout = async () => {
    alert("vous êtes déconnecté");
    console.log("after alert");
    localStorage.clear();
    history.push("/");
  };

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {token ? (
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
        {!token ? (
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
