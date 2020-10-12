import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//components
import HeroProfile from "../components/HeroProfile";
import Category from "../components/Category";
import DescriptionJob from "../components/DescriptionJob";
import UpdateFormControl from "../components/UpdateProfileForm/UpdateFormControl";



const CompagnyProfile = (props) => {
  const userID = props.match.params.id;
  //stock all offers of the comapgny
  const [myOffers, setMyOffers] = useState([]);
  //stock compagny's details
  const [myDetails, setMyDetails] = useState([]);
  

  useEffect(() => {
    const getMyOffers = async () => {
      const url = `http://localhost:5000/compagny/getMyoffers/${userID}`;
      const result = await axios.get(url);
      setMyOffers(result.data);
    };
    getMyOffers();

    //state
    const getMyDetails = async () => {
      const url = `http://localhost:5000/allpeople/userDetails/${userID}`;
      const result = await axios.get(url);
      setMyDetails(result.data);
    };
    getMyDetails();
  }, []);

  const logo = myDetails.map((item) => item.logo);
  const nameUser = myDetails.map((item) => item.first_name);


  return (
    <>
      <HeroProfile logo={logo} nameUser={nameUser} />
      <div className="container">
        <div className="inner--profilePage">
          <div className="ad">
            <Category name={"Mes offres"} />
            <div className="list">
              {myOffers.map((offer) => (
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
              ))}
            </div>
          </div>
          <div className="mydetails">
            <Category name={"Mon profil"}/>
          </div>
          <UpdateFormControl userType={"compagny"} />

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
