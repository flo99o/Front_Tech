import React, { useState, useEffect } from "react";
import axios from "axios";
import DescriptionJob from "./DescriptionJob";


const JobList = (props) => {
  //stock datas from DB
  const [offers, setOffers] = useState([]);
 
  useEffect(() => {
    const getOffers = async () => {
      const url = "http://localhost:5000/users/getOffers"; //change users with allpeople
      const result = await axios.get(url);
      setOffers(result.data);
    };
    getOffers();
  }, []);

  return (
    <div className="job-list">
      {offers.map((item) => (
        <DescriptionJob
          key={item.offerID}
          idJob={item.offerID}
          logo={item.logo}
          wage={item.wage}
          contract={item.contract}
          job_name={item.job_name}
          compagny_name={item.compagny_name}
          location={item.location}
        />
      ))}
    </div>
  );
};

export default JobList;
