import React from 'react'
//components
import HeroProfile from './HeroProfile'
import Button from './Button'
//assets
import logo from '../assets/logo_entreprise/lcl.png'
import Category from './Category'

const CompagnyProfile = () => {
    return (
        <>
            <HeroProfile photo={logo} userType={"LCL"}/>
            <div className="container">
                <div className="inner--profilePage">
                    <div className="ad">
                        <Category name={'Mes offres'}/>
                        <div className="list list--show">
            <table>
              <thead>
                <tr>
                  <th>Poste</th>
                  <th>Salaire</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>FullStack</td>
                  <td>3000€</td>
                  <td>CDI</td>
                </tr>
              </tbody>
            </table>
          </div>
         
                    </div>
                    <Button className={"btn"} value={"Créer une nouvelle offre"}/>
                </div>
            </div>
        </>
    )
}

export default CompagnyProfile
