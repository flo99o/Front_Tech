import axios from "axios";

export const getUserDetails = async (userID) => {
  const url = `http://localhost:5000/allpeople/userDetails/${userID}`;
  const results = await axios.get(url);
  const details = results.data[0];
  return details;
};
