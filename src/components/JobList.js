import React, { useState, useEffect } from "react";
import axios from "axios";
import DescriptionJob from "./DescriptionJob";


const JobList = (props) => {
  //stock datas from DB
  const [getLatestJob, setGetLatestJob] = useState([]);
  console.log('getLatestJob:', getLatestJob)

  useEffect(() => {
    const getLatestJob = async () => {
      const url = "http://localhost:5000/users/getLatestjobs";
      const result = await axios.get(url);
      setGetLatestJob(result.data);
    };
    getLatestJob();
  }, []);

  

  return (
    <div className="job-list">
      {getLatestJob.map((item) => (
        <DescriptionJob
          key={item.idOffers}
          idJob={item.idOffers}
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
