import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//components
import Hero from "../components/Hero";
import Category from "../components/Category";
import DescriptionJob from "../components/DescriptionJob";

import UpdateCompagnyForm from "../components/UpdateProfileForm/UpdateCompagnyProfile";
import DeleteAccount from "../components/DeleteAccount";

const getUserDetails = require("../services/services");

const CompagnyProfile = (props) => {
  //get the user's id of the compagny
  const getUserID = JSON.parse(localStorage.getItem("dataKey"));
  const userID = getUserID.userID
  //store all offers of the comapgny
  const [myOffers, setMyOffers] = useState([]);
  //store compagny's details
  const [myDetails, setMyDetails] = useState([]);
  
  useEffect(() => {
    const getMyOffers = async () => {
      console.log("userID:", userID);
      const url = `http://localhost:5000/compagny/getMyoffers/${userID}`;
      const result = await axios.get(url);
      setMyOffers(result.data);
    };
    getMyOffers();

     //get user's details form "getUserDetails" function (services component)
    async function fetchData() {
      const userDetails = await getUserDetails.getUserDetails(userID);
      setMyDetails(userDetails);
    }
    fetchData();
  }, [userID]);

  //store logo and first name of the user
  const logo = myDetails.logo;
  const nameUser = myDetails.first_name;

  return (
    <>
      <Hero logo={logo} nameUser={nameUser} />
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
          
          <div className="otherOptions">

          <Link to={"/createAd"} className={"btn"}>
            {" "}
            Crée une nouvelle offre
          </Link>
          <DeleteAccount />
          <Link to={"/application"} className="btn btn--grey"> Voir les candidatures</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompagnyProfile;
