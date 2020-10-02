import React from 'react'
//components
import Category from './Category'
import HeroProfile from '../components/HeroProfile'
import user from "../assets/user_profile/man.jpg"

const UserProfile = () => {
    return (
        <>
        <HeroProfile photo={user} userType={'Daniella'}/>
        <div className="container">
            <div className="inner--profilePage">
                <div className="application">
                    <Category name={"Mes candidatures"}/>
                </div>
                <div className="ad">
                    <Category name={"Mes offres sauvergardées"}/>
                </div>
                <div className="details">
                    <Category name={"Mes infos personnelles"} />
                </div>
            </div>
        </div>
        </>
    )
}

export default UserProfile
