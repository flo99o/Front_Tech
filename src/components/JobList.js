import React from "react";
//photo
import lcl from "../assets/logo_entreprise/lcl.png";
const JobList = () => {
  return (
    <div className="job-list">
      <a href="" className="job-list__item">
        <div className="job-list__photo">
          <img src={lcl} />
        </div>
        <div className="job-list__contract">
          <span className="salary">3000€ - 5000€</span>
          <span className="type">Full time</span>
        </div>
        <div className="job-list__info">
          <h6 className="name-job">Développeur Web Front-End</h6>
          <ul className="compagny__info">
            <li className="compagny__name">Bnp Paribas</li>
            <li className="compagny__place">75000</li>
          </ul>
        </div>
      </a>
    </div>
  );
};

export default JobList;
