import React, { useState, useEffect } from "react";
import axios from "axios";
import JobContent from "./JobContent";

const DescriptionJob = (props) => {
  const { idJob, logo, wage, contract, job_name, compagny_name, location } = props;

  // stock details of ad
  const [furtherDetails, setFurtherDetails] = useState([]);
  console.log('furtherDetails:', furtherDetails)
  const [toggleDetails, setToggleDetails] = useState(false);

  useEffect(() => {
    const getFurtherDetails = async () => {
      const url = `http://localhost:5000/users/getOffer/${idJob}`;
      const result = await axios.get(url);
      setFurtherDetails(result.data);
    };
    getFurtherDetails();
  }, [idJob]);



  return (
    <>
      <div className="job-list__item">
        <div className="job-list__photo">
          <img src={logo} alt="logo de l'entreprise" />
        </div>
        <div className="job-list__contract">
          <span className="salary">{wage}€</span>
          <span className="type">{contract}</span>
        </div>
        <div className="job-list__info">
          <h6 className="name-job">{job_name}</h6>
          <ul className="compagny__info">
            <li className="compagny__name">{compagny_name}</li>
            <li className="compagny__place">{location}</li>
          </ul>
        </div>
        <span className="compagny__details"onClick={() => setToggleDetails(!toggleDetails)}>&dArr;</span>
      </div>
      {toggleDetails
        ? furtherDetails.map((item) => (
            <JobContent
              description_compagny={item.description_compagny}
              description_position={item.description_position}
              prerequisite={item.prerequisite}
            />
          ))
        : null}
    </>
  );
};

export default DescriptionJob;
