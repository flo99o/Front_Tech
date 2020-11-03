import React, { useState } from 'react';
import axios from "axios";


// get user's details from BDD
export const getUserDetails = async (userID) => {
  // const token = localStorage.getItem("token")
  // const {userID} = decode(token)
  // console.log('userID:', userID)

  const url = `http://localhost:4040/allpeople/userDetails/${userID}`;
  const results = await axios.get(url);
  const details = results.data[0];
  return details;
};



// module.exports = {
//   getUserDetails: async (userID) => {
//     const url = `http://localhost:4040/allpeople/userDetails/${userID}`;
//     const results = await axios.get(url);
//     const details = results.data[0];
//     return details;
//   },
//   getLogout : (message) => {
//     alert(message);
//     localStorage.clear();
//     window.history.go("/");
//   }
// }