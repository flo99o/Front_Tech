import React, {useEffect} from "react";
import $ from "jquery"
//components
import Header from "../components/Header";
import NavBar from "./Navbar";

const HeroProfile = ({ logo, nameUser }) => {

  useEffect(() => {
    $("#logo-menu").on('click', () => {
      $(".navigation").toggle()
    })
  }, []) 
  return (
    <section className="hero">
      <img
        id="logo-menu"
        src="https://img.icons8.com/metro/26/000000/menu.png"
        alt="utilisateur"
      />
      <NavBar />
      <Header />
      <div className="heading-primary heading-primary--down">
        <img className="profilePhoto" src={logo} alt="" />
        <h1 className="heading-primary--main">{nameUser}</h1>
      </div>
    </section>
  );
};

export default HeroProfile;
