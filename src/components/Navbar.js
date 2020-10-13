import React from "react";
import { Link } from "react-router-dom"
//icons
import briefcase from "../assets/logo_nav/mallette.svg";

const NavBar = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__items active">
          <Link to='/signin'>
          <img src={briefcase} alt="malette" />
          <p>Se connecter </p>
          </Link>
        </li>
        <li 
        className="navigation__items">
          <Link to={"/register"}>
          <img src={briefcase} alt="malette" />
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
        <img src={briefcase} alt="malette" />
          <p>FAQ </p>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
