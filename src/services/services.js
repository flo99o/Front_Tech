import axios from "axios";

export const getUserDetails = async (userID) => {
  const url = `http://localhost:5000/allpeople/userDetails/${userID}`;
  const result = await axios.get(url);
  const details = result.data[0];
  return details;
};
