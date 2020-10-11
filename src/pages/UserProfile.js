import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
//components
import Category from "../components/Category";
import HeroProfile from "../components/HeroProfile";
import DescriptionJob from "../components/DescriptionJob";
import UpdateProfile from "./UpdateProfile";

const UserProfile = (props) => {
  const userID = props.match.params.id;

  const [myDetails, setMyDetails] = useState([]);
  const [myApplications, setMyApplications] = useState([]);
  console.log("myApplications:", myApplications);

  useEffect(() => {
    const geyMyApplications = async () => {
      const url = `http://localhost:5000/users/offerApplied/${userID}`;
      const result = await axios.get(url);
      setMyApplications(result.data);
    };
    geyMyApplications();

    // (state)
    const getMyDetails = async () => {
      const url = `http://localhost:5000/allpeople/myDetails/${userID}`;
      const result = await axios.get(url);
      setMyDetails(result.data);
    };
    getMyDetails();
  }, []);

  const logo = myDetails.map((item) => item.logo);
  const nameUser = myDetails.map((item) => item.first_name);

  console.log("nameUser:", nameUser);
  return (
    <>
      <HeroProfile logo={logo} nameUser={nameUser} />
      <div className="container">
        <div className="inner--profilePage">
          <div className="application">
            <Category name={"Mes candidatures"} />
          </div>
          <div className="list">
            {myApplications.map((offer) => (
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
                userType={'user'}
              />
            ))}
          </div>

          <div className="ad">
            <Category name={"Mes offres sauvergardées"} />
          </div>

          <div className="details">
            <Category name={"Mes infos personnelles"} />
            <UpdateProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
