import React from "react";
//components
import Header from "../components/Header"

const HeroProfile = ({photo, userType}) => {
    
  return (
    <section className="hero">
      <img
        id="logo-menu"
        src="https://img.icons8.com/metro/26/000000/menu.png"
      />
      <Header />
      <div className="heading-primary heading-primary--down">
          <img className="profilePhoto" src={photo} alt=""/>
  <h1 className="heading-primary--main">{userType}</h1>
      </div>
      

    </section>
  );
};

export default HeroProfile;
