import React from "react";
import FilterBar from "./FilterBar";
import Header from "./Header";
import NavBar from "./Navbar";

const Hero = () => {
  return (
    <section className="hero">
        <Header/>
      <div className="heading-primary">
        <h1 className="heading-primary--main">Find Your Next Job</h1>
        <p className="heading-primary--sub">More then X job listed here.</p>
      </div>
      <NavBar />
    </section>
      
  );
};

export default Hero;
