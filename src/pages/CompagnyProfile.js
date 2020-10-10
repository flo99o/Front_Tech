import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

//components
import HeroProfile from "../components/HeroProfile";
import Category from "../components/Category";
import DescriptionJob from "../components/DescriptionJob";



const CompagnyProfile = (props) => {
  //stock all offers of the comapgny
  const [myOffers, setMyOffers] = useState([]);
  const id = props.match.params.id

  useEffect(() => {
    const getMyOffers = async () => {
      const url = `http://localhost:5000/compagny/getMyoffers/${id}`;
      const result = await axios.get(url);
      setMyOffers(result.data);
    };
    getMyOffers();
  }, [id]);

  const logo = Array.from(new Set(myOffers.map(item => item.logo)))
  const nameUser = Array.from(new Set(myOffers.map(item => item.compagny_name)))

  

  return (
    <>
      <HeroProfile photo={logo} nameUser={nameUser}/>
      <div className="container">
        <div className="inner--profilePage">
          <div className="ad">
            <Category name={"Mes offres"} />
            <div className="list list--show">
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
                  userType={'compagny'}
                />
              ))}
            </div>
          </div>
          
          <Link to={"/createAd"} className={"btn"} > Crée une nouvelle offre</Link>
        </div>
      </div>
    </>
  );
};

export default CompagnyProfile;
