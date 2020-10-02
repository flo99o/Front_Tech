import React from "react";
//components
import HeroProfile from '../components/HeroProfile'
import UserProfile from'../components/UserProfile'

//photo

import AdminProfile from "../components/AdminProfile";

const ProfilePage = (p) => {
  return (
    <div className="profilePage">
     
      
        <AdminProfile />
        <UserProfile />
      
    </div>
  );
};

export default ProfilePage;
