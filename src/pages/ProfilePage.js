import React from "react";

import Hero from "../components/Hero";

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <Hero title={"Yo les Admins"} />
      <div className="container">
        <div className="inner--profilePage">
          <div className="user">
            <div className="category">
              <h2 className="heading-secondary--main">Les utilisateurs </h2>
              <span className="droplist">&#x2304;</span>
            </div>
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
              <div className="category">
              <h2 className="heading-secondary--main">Les offres</h2>
            <span className="droplist">&#x2304;</span>
              </div>
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
              <div className="category">
              <h2 className="heading-secondary--main">Les compagnies</h2>
            <span className="droplist">&#x2304;</span>
              </div>
            
            <div className="list">
              <ul>
                <li>LCL</li>
                <li>BNP paribas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
