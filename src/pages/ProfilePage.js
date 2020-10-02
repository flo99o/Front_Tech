import React from "react";
//components
import HeroProfile from '../components/HeroProfile'

//photo
import user from "../assets/user_profile/man.jpg"
import AdminProfile from "../components/AdminProfile";

const ProfilePage = (props) => {
  return (
    <div className="profilePage">
      <HeroProfile photo={user} userType={'Yo les Admins'}/>
      <div className="container">
        <AdminProfile />
      </div>
    </div>
  );
};

export default ProfilePage;
