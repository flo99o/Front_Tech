import React from "react";
//icons
import briefcase from "../assets/logo_nav/mallette.svg";

const NavBar = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__items active">
          <img src={briefcase} alt="malette" />
          <p>Jobs </p>
        </li>
        <li className="navigation__items"><img src={briefcase} alt="malette" />
          <p>Compagnies </p></li>
        <li className="navigation__items">
        <img src={briefcase} alt="malette" />
          <p>FAQ </p>
        </li>
        <li className="navigation__items">
        <img src={briefcase} alt="malette" />
          <p>Review </p>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
