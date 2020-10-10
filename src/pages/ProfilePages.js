import React from "react";
//components
import UserProfile from'../components/UserProfile'
import AdminProfile from "../components/AdminProfile";
import CompagnyProfile from "../components/CompagnyProfile";

const ProfilePages = () => {
  return (
    <div className="profilePage">
     
      
        <AdminProfile />
        <UserProfile />
      
    </div>
  );
};

export default ProfilePages;
