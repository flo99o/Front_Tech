import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//components
import HeroProfile from "../components/HeroProfile";
import Category from "../components/Category";
import DescriptionJob from "../components/DescriptionJob";
import UpdateFormControl from "../components/UpdateProfileForm/UpdateFormControl";
import UpdateCompagnyForm from "../components/UpdateProfileForm/UpdateCompagnyProfile";



const CompagnyProfile = (props) => {
  //get the user's id of the compagny
  const getUserID = JSON.parse(localStorage.getItem("dataKey"));
  const userID = getUserID.userID

  
  //stock all offers of the comapgny
  const [myOffers, setMyOffers] = useState([]);
  //stock compagny's details
  const [myDetails, setMyDetails] = useState([]);
  
  const getUserDetails = require("../services/services");
  useEffect(() => {
    const getUserID = JSON.parse(localStorage.getItem("dataKey"));
    const userID = getUserID.userID

    const getMyOffers = async () => {
      console.log("userID:", userID);
      const url = `http://localhost:5000/compagny/getMyoffers/${userID}`;
      const result = await axios.get(url);
      setMyOffers(result.data);
    };
    getMyOffers();

    //state
    async function fetchData() {
      const userDetails = await getUserDetails.getUserDetails(userID);
      setMyDetails(userDetails);
    }
    fetchData();
  }, []);

  console.log('myOffers:', myOffers)
  const logo = myDetails.logo;
  const nameUser = myDetails.first_name;

  return (
    <>
      <HeroProfile logo={logo} nameUser={nameUser} />
      <div className="container">
        <div className="inner--profilePage">
          <div className="ad">
            <Category name={"Mes offres"} />
            <div className="list">
              {myOffers === undefined ? <p>Vous avez posté aucune offre</p> : 
                myOffers.map((offer) => (
                  <DescriptionJob
                    key={offer.offerID}
                    idJob={offer.offerID}
                    logo={offer.logo}
                    wage={offer.wage}
                    contract={offer.contract}
                    job_name={offer.job_name}
                    compagny_name={offer.compagny_name}
                    location={offer.location}
                    toggle={true}
                    userType={"compagny"}
                  />
                ))
              }
              
            </div>
          </div>
          <div className="mydetails">
            <Category name={"Mon profil"}/>
          </div>
          <UpdateCompagnyForm userDetails={myDetails} />

          <Link to={"/createAd"} className={"btn"}>
            {" "}
            Crée une nouvelle offre
          </Link>
        </div>
      </div>
    </>
  );
};

export default CompagnyProfile;
