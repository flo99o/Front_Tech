
import axios from "axios";

// get user's details from BDD
export const getUserDetails = async (userID) => {
  const url = `http://localhost:5000/allpeople/userDetails/${userID}`;
  const results = await axios.get(url);
  const details = results.data[0];
  return details;
};

// process to get log out
export const getLogout = (message) => {
  localStorage.clear();
  window.history.go("/home");
  alert(message);
}

// module.exports = {
//   getUserDetails: async (userID) => {
//     const url = `http://localhost:5000/allpeople/userDetails/${userID}`;
//     const results = await axios.get(url);
//     const details = results.data[0];
//     return details;
//   },
//   getLogout : (message) => {
//     alert(message);
//     localStorage.clear();
//     window.history.go("/home");
//   }
// }