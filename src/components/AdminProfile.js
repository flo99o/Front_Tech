import React, { useEffect, useState } from "react";
import axios from 'axios'
// photo
import user from "../assets/user_profile/man.jpg"
// components
import Category from "../components/Category";
import HeroProfile from "./HeroProfile";
import Button from "./Button";

const AdminProfile = () => {
  const [users, setUsers] = useState([])
  const [offers, setOffers] = useState([])
  const [compagnies, setCompagnies] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const url = "http://localhost:5000/admin/users";
      const result = await axios.get(url);
      setUsers(result.data);
    }
    getUsers()

    const getOffers = async () => {
      const url = "http://localhost:5000/admin/usersForAdmin";
      const result = await axios.get(url);
      setOffers(result.data);
    }
    getOffers()
    
    const getCompagnies = async () => {
      const url = "http://localhost:5000/admin/compagnies";
      const result = await axios.get(url);
      setCompagnies(result.data);
    }
    getCompagnies()
    
  }, [])

  return (
      <>
    <HeroProfile photo={user} userType={'Yo les admins'}/>
    <div className="container">
      <div className="inner--profilePage">
        <div className="user">
          <Category name={"Les utilisateurs"} />
          <div className="list">
              {users.map(user => (
            <div className="userDetails">
                <p>{user.first_name}</p>
                <p>{user.last_name}</p>
                <p>{user.email}</p>
            </div>
              ))}
          </div>
        </div>

        <div className="ad">
          <Category name={"Les offres"} />
          <div className="list">
            <table>
              <thead>
                <tr>
                  <th>Poste</th>
                  <th>Société</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {offers.map(offer => (
                <tr>
                  <td>{offer.title}</td>
                  <td>{offer.compagny_name}</td>
                  <td>{offer.contract}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="compagny">
          <Category name={"Les compagnies"} />
          <div className="list">
            <ul>
            {compagnies.map(item => (
              <div key={item.id} className="item-compagny">
              <li >{item.compagny_name}</li>
              <span>&#10060; </span>
              </div>
              ))}
              </ul>
          </div>
        </div>
      </div>
      <Button className={"btn"} value={"Créer une nouvelle offre"}/>
    </div>
        </>
  );
};

export default AdminProfile;
