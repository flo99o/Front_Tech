import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
// components
import Category from "../components/Category";
import DescriptionJob from "./DescriptionJob";
import HeroProfile from "./HeroProfile";

Modal.setAppElement("#root");
const AdminProfile = () => {
  const userID = 1; //state
  //get the list of :
  const [users, setUsers] = useState([]);
  const [offers, setOffers] = useState([]);
  const [compagnies, setCompagnies] = useState([]);
  const [myDetails, setMyDetails] = useState([]);

  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [idToDelete, setidToDelete] = useState("")

  //stock results from back
  const [response, setResponse] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const url = "http://localhost:5000/admin/users";
      const result = await axios.get(url);
      setUsers(result.data);
    };
    getUsers();

    const getOffers = async () => {
      const url = "http://localhost:5000/allpeople/getoffers";
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

    //state
    const getMyDetails = async () => {
      const url = `http://localhost:5000/allpeople/userDetails/${userID}`;
      const result = await axios.get(url);
      setMyDetails(result.data);
    };
    getMyDetails();
  }, [response]);

  //admin's logo
  const logo = myDetails.map((item) => item.logo);

  //
  const handleModale = (id) =>  {
    //get user's id which has been clicked
    setidToDelete(id)
    setmodalIsOpen(true)
  }

  const handleDeleteUser = () => {
    const url = `http://localhost:5000/allpeople/deleteUserAccount/${idToDelete}`
    axios.delete(url)
    .then(res => setResponse(res.data))
  };

  const handleDeleteCompagny = (id) => {
    
    //function which delete compagny
  };

  return (
    <>
      <HeroProfile logo={logo} nameUser={"Yo les admins"} />
      <div className="container">
        <div className="inner--profilePage">
          <div className="user">
            <Category name={"Les utilisateurs"} />
            <div className="list">
              {users.map((user) => (
                <div key={user.userID} className="list__user">
                  <p>
                    {user.first_name} {user.last_name}
                  </p>
                  <span onClick={() => handleModale(user.userID)}>
                    {" "}
                    &#x274C;
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="ad">
            <Category name={"Les compagnies"} />
            <div className="list list--show">
              {compagnies.map((compagny) => (
                <ul key={compagny.compagnyID} className="list__compagny">
                  <li>{compagny.compagny_name}</li>
                  <span
                    onClick={() => handleDeleteCompagny(compagny.compagnyID)}
                  >
                    
                    &#x274C;
                  </span>
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
      </div>
      <Modal isOpen={modalIsOpen} onAfterClose={handleDeleteUser} onRequestClose={() => setmodalIsOpen(false)} shouldCloseOnOverLayClick={false}>
        <div>
          <h2>confirmer la suppression ?</h2>
          <button onClick={() => setmodalIsOpen(false)}>Oui</button>
        </div>
      </Modal>
    </>
  );
};

export default AdminProfile;
