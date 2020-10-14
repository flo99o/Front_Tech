import axios from "axios"
export const getUserDetails  = async(userID) => {
    console.log('random');
    const url = `http://localhost:5000/allpeople/userDetails/${userID}`;
      const result = await axios.get(url);
    //   setMyDetails(result.data);
}