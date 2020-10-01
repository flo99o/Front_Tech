import React from "react";
// components
import Header from "./Header";


const Hero = () => {
  return (
    <section className="hero">
        <img id="logo-menu" src="https://img.icons8.com/metro/26/000000/menu.png"/>
        <Header/>
      <div className="heading-primary">
        <h1 className="heading-primary--main">Find Your Next Job</h1>
        <p className="heading-primary--sub">More then X jobs listed here.</p>
      </div>
    </section>
      
  );
};

export default Hero;
