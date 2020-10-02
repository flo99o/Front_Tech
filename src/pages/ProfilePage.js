import React from "react";
//components
import Hero from "../components/Hero";
//photo
import user from "../assets/user_profile/man.jpg"
import Category from "../components/Category";

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <Hero title={"Yo les Admins"} photo={user}/>
      <div className="container">
        <div className="inner--profilePage">
          <div className="user">
          <Category name={"Les utilisateurs"}/>
            <div className="list">
              <table>
                <thead>
                  <tr>
                    <th>Prénom</th>
                    <th>Nom</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tracy</td>
                    <td>zumbu</td>
                  </tr>
                  <tr>
                    <td>Paul</td>
                    <td>Mouche</td>
                    <td>x</td>
                  </tr>
                </tbody>
              </table>
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
                  <tr>
                    <td>FullStack</td>
                    <td>LCL</td>
                    <td>CDI</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="compagny">
             <Category name={"Les compagnies"}/>
            
            <div className="list">
              <ul>
                <li>LCL</li>
                <li>BNP paribas</li>
              </ul>
            </div>
          </div>
        </div>
        <button className="btn">Créer une nouvelle offre</button>
      </div>
    </div>
  );
};

export default ProfilePage;
