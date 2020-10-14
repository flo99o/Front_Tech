import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
// components
import Category from "../components/Category";
import DescriptionJob from "./DescriptionJob";
import HeroProfile from "./HeroProfile";
import UpdateFormControl from "./UpdateProfileForm/UpdateFormControl";

Modal.setAppElement("#root");
const AdminProfile = () => {
  const userID = 1; //state
  //get the list of :
  const [users, setUsers] = useState([]);
  const [offers, setOffers] = useState([]);
  const [compagnies, setCompagnies] = useState([]);
  console.log('compagnies:', compagnies)
  const [myDetails, setMyDetails] = useState([]);

  //handle modal opening
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  //get what user's type and user's id to delete
  const [idToDelete, setidToDelete] = useState("");
  const [userToDelete, setUserToDelete] = useState("");
  const [compagnyToDelete, setCompagnyToDelete] = useState("")

  //stock results from back
  const [response, setResponse] = useState([]);

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

  // function to open modal
  const handleModale = (id, userType, compagny_name) => {
    console.log("id:", id, userType, compagny_name);
    //stock user's id, type or compagny name which has been clicked
    setUserToDelete(userType);
    setidToDelete(id);
    setCompagnyToDelete(compagny_name)
    setmodalIsOpen(true);
  };

  // function to delete user
  const handleDelete = async ()  => {
    console.log(compagnyToDelete);
    setmodalIsOpen(false)
    if (compagnyToDelete){
      console.log('compagnyToDelete:', compagnyToDelete)
      
    
      const url = `http://localhost:5000/compagny/deleteCompagny/${compagnyToDelete}`
      await axios.delete(url)
    }
    else if (userToDelete === "user") {
      const url = `http://localhost:5000/allpeople/deleteUserAccount/${idToDelete}`;
      axios.delete(url).then((res) => setResponse(res.data));
    } else if (userToDelete === "compagny") {
      const url = `http://localhost:5000/compagny/deleteCompagny/${idToDelete}`;
      axios.delete(url).then((res) => setResponse(res.data));
    }
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
                  <span onClick={() => handleModale(user.userID, "user")}>
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
                    onClick={() =>
                      handleModale(compagny.compagnyID, "compagny", compagny.compagny_name)
                    }
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

          <div className="mydetails">
            <Category name={"Mon profil"} />
            <UpdateFormControl userType={"admin"} />
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setmodalIsOpen(false)}
            shouldCloseOnOverLayClick={false}
            
          >
            <div>
              <h2>confirmer la suppression ?</h2>
              <button onClick={() => handleDelete()}>Oui</button>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
