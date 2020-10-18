import React, { useState, useEffect } from "react";
import axios from "axios";
//components
import Category from "../components/Category";
import HeroProfile from "../components/HeroProfile";
import DescriptionJob from "../components/DescriptionJob";
import UpdateUserProfile from "../components/UpdateProfileForm/UpdateUserProfile";
import DeleteAccount from "../components/DeleteAccount";

const getUserDetails = require("../services/services");

const UserProfile = () => {
   //get the user's id form localstorage
  const getUserID = JSON.parse(localStorage.getItem("dataKey"));
  const userID = getUserID.userID;

  //store details of the user and his application
  const [myDetails, setMyDetails] = useState([]);
  const [myApplications, setMyApplications] = useState([]);

  useEffect(() => {
    const geyMyApplications = async () => {
      const url = `http://localhost:5000/users/offerApplied/${userID}`;
      const result = await axios.get(url);
      setMyApplications(result.data);
    };
    geyMyApplications();

    //get user's details form "getUserDetails" function (services component)
    async function fetchData() {
      const userDetails = await getUserDetails.getUserDetails(userID);
      setMyDetails(userDetails);
    }
    fetchData();
  }, []);

  //store logo and first name of the user
  const logo = myDetails.logo;
  const nameUser = myDetails.first_name;

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
                userID={userID}
                logo={offer.logo}
                wage={offer.wage}
                contract={offer.contract}
                job_name={offer.job_name}
                compagny_name={offer.compagny_name}
                location={offer.location}
                toggle={true}
                userType={"user"}
              />
            ))}
          </div>
          <div className="details">
            <Category name={"Mes infos personnelles"} />
            <UpdateUserProfile userDetails={myDetails} />
          </div>

        </div>
        <DeleteAccount />
      </div>
    </>
  );
};

export default UserProfile;
