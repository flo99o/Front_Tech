import React, { useState, useEffect } from "react";
import axios from "axios";
import DescriptionJob from "../components/DescriptionJob";
import Hero from "../components/Hero";
import JobContent from "../components/JobContent";

const JobPage = (props) => {
  // Get params' id
  const id = props.match.params.id;

  //stock datas for DB
  const [descriptionJob, setDescriptionJob] = useState([{}]);

  useEffect(() => {
    const getDescriptionJob = async () => {
      const url = `http://localhost:5000/users/GetOffer/${id}`;
      const result = await axios.get(url);
      setDescriptionJob(result.data);
    };
    getDescriptionJob();
  }, [id]);

  const titleJob = descriptionJob.map((item) => item.title);

  return (
    <div className="jobPage">
      <Hero title={titleJob} />
      <div className="container">
        {descriptionJob.map((item) => (
          <DescriptionJob
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            wage={item.wage}
            type={item.type}
            compagny_name={item.compagny_name}
            ville={item.ville}
          />
        ))}
        {descriptionJob.map((item) => (
          <JobContent
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            wage={item.wage}
            type={item.type}
            compagny_name={item.compagny_name}
            ville={item.ville}
            description_compagny={item.description_compagny}
            description_position={item.description_position}
            prerequisite={item.prerequisite}
          />
        ))}
      </div>
    </div>
  );
};

export default JobPage;
