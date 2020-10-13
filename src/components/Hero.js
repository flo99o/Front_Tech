import React from "react";
import $ from "jquery"
// components
import Header from "./Header";
import { useEffect } from "react";
import NavBar from "./Navbar";


const Hero = ({title, subtitle}) => {
 
  useEffect(() => {
    $("#logo-menu").on('click', () => {
      $(".navigation").toggle()
    })
  }, [])

  return (
    <section className="hero">
        <img onClick={""} id="logo-menu" src="https://img.icons8.com/metro/26/000000/menu.png" alt="menu logo" />
        <NavBar />
        <Header/>
      <div className="heading-primary">
        <h1 className="heading-primary--main">{title}</h1>
  <p className="heading-primary--sub">{subtitle}</p>
      </div>
    </section>
      
  );
};

Hero.defaultProps = {
  title: 'Find your next job',
  subtitle : 'Des offres spécialisées dans la tech.'
}

export default Hero;
