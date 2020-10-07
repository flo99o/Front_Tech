import React, { useState, useEffect } from "react";
import axios from "axios";
import DescriptionJob from "./DescriptionJob";


const JobList = (props) => {
  //stock datas from DB
  const [getLatestJob, setGetLatestJob] = useState([]);

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
          key={item.id}
          idJob={item.id}
          image={item.image}
          wage={item.wage}
          type={item.type}
          title={item.title}
          compagny_name={item.compagny_name}
          ville={item.ville}
        />
      ))}
    </div>
  );
};

export default JobList;
