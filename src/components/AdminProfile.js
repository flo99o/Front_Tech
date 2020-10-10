import React, { useEffect, useState } from "react";
import axios from "axios";
// photo
import user from "../assets/user_profile/man.jpg";
// components
import Category from "../components/Category";
import DescriptionJob from "./DescriptionJob";
import HeroProfile from "./HeroProfile";
import Button from "./Button";

const AdminProfile = () => {
  const [users, setUsers] = useState([]);
  const [offers, setOffers] = useState([]);
  const [compagnies, setCompagnies] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const url = "http://localhost:5000/admin/users";
      const result = await axios.get(url);
      setUsers(result.data);
    };
    getUsers();

    const getOffers = async () => {
      const url = "http://localhost:5000/admin/offers";
      const result = await axios.get(url);
      setOffers(result.data);
    };
    getOffers();

    const getCompagnies = async () => {
      const url = "http://localhost:5000/admin/compagnies";
      const result = await axios.get(url);
      setCompagnies(result.data);
    };
    getCompagnies();
  }, []);

  return (
    <>
      <HeroProfile photo={user} nameUser={"Yo les admins"} />
      <div className="container">
        <div className="inner--profilePage">
          <div className="user">
            <Category name={"Les utilisateurs"} />
            <div className="list">
              {users.map((user) => (
                <div className="list__user">
                  <p>
                    {user.first_name} {user.last_name}
                  </p>
                  <span> &#x274C;</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ad">
            <Category name={"Les compagnies"} />
            <div className="list list--show">
              {compagnies.map((compagny) => (
                <ul className="list__compagny">
                  <li key={compagny.compagnyID}>{compagny.compagny_name}</li>
                  <span> &#x274C;</span>
                </ul>
              ))}
            </div>
          </div>

          <div className="compagny">
            <Category name={"Les offers"} />
            <div className="list list--show">
              {offers.map((offer) => (
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
                  userType={"admin"}
                />
              ))}
            </div>
          </div>
        </div>
        <Button className={"btn"} value={"Créer une nouvelle offre"} />
      </div>
    </>
  );
};

export default AdminProfile;
