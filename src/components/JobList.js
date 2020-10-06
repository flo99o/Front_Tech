import React, { useState, useEffect } from "react";
import axios from "axios";
//photo
import lcl from "../assets/logo_entreprise/lcl.png";

const JobList = () => {
  const [getLatestJob, setGetLatestJob] = useState([]);

  useEffect(() => {
    const getLatestJob = async () => {
      const url = `http://localhost:5000/users/getLatestjobs`;
      const result = await axios.get(url);
      setGetLatestJob(result.data);
    };
    getLatestJob();
  }, []);

  console.log(getLatestJob);

  return (
    <div className="job-list">
     
          {getLatestJob.map(item => (
             <a key={item.id} href="" className="job-list__item">
             <div className="job-list__photo">
               <img src={item.image} />
             </div>
             <div className="job-list__contract">  <span className="salary">{item.wage}€</span>
          <span className="type">{item.type}</span>
        </div>
        <div className="job-list__info">
          <h6 className="name-job">{item.title}</h6>
          <ul className="compagny__info">
            <li className="compagny__name">{item.compagny_name}</li>
            <li className="compagny__place">{item.ville}</li>
          </ul>
        </div>
      </a>
          ))}
        
    </div>
  );
};

export default JobList;
