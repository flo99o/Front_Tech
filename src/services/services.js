import axios from "axios";
import decode from "jwt-decode";

// get user's details from BDD
export const getUserDetails = async () => {
  const token = localStorage.getItem("token") 
  const {userID} = decode(token) 

  const url = `http://localhost:4040/allpeople/userDetails/${userID}`;
  const results = await axios.get(url);
  const details = results.data[0];
  return details;
};

// Check if user is logged
export const isLogged = () => {
  // 1. stock token from localstorage
  const token = localStorage.getItem("token");
  // 2. verify if there is a token
  if (!token) {
    return false;
  }
  // 3. verify if the token has been expired
  try {
    const { exp } = decode(token);
    if (exp < new Date().getTime() / 1000) {
      return false;
    }
  } catch (e) {
    return false;
  }
  const { userType } = decode(token);
  console.log(userType);
  return userType;
};

export const userDetails = () => {
  try {
    if(localStorage){
      console.log("hello");
      const token =localStorage.getItem("token")
      const { userID, userType} = decode(token)
      return {
        userID,
        userType,
      }
    }
  } catch (err){
    console.log("No user connected " + err);
  }
 

}
