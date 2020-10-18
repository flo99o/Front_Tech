import React, {useEffect, useState} from 'react'
import axios from "axios"
import DescriptionJob from '../components/DescriptionJob'
import Hero from '../components/Hero';


const getUserDetails = require("../services/services");

const Application = () => {
//get the user's id of the compagny
const getUserID = JSON.parse(localStorage.getItem("dataKey"));
const userID = getUserID.userID
const compagny_name = getUserID.compagny_name
//store all offers of the comapgny
const [myApplications, setMyApplications] = useState([]);
//store compagny's details
const [myDetails, setMyDetails] = useState([]);
    useEffect(() => {
        const getMyApplications = async () => {
            console.log("userID:", userID);
            const url = `http://localhost:5000/compagny/application/${compagny_name}`;
            const result = await axios.get(url);
            setMyApplications(result.data);
          };
          getMyApplications();

          console.log('application :', );
           //get user's details form "getUserDetails" function (services component)
          async function fetchData() {
            const userDetails = await getUserDetails.getUserDetails(userID);
            setMyDetails(userDetails);
          }
          fetchData();
    }, [getUserDetails])

    const logo = myDetails.logo
    return (
        <div className="application">
            <Hero title={"Les candidatures"} subtitle={""}/>
            
            {myApplications === undefined ? null : 
            
                myApplications.map((application) => (
                    <>
                  {/* <DescriptionJob
                    key={application.offerID}
                    idJob={application.offerID}
                    logo={logo}
                    wage={application.wage}
                    contract={application.contract}
                    job_name={application.job_name}
                    compagny_name={application.compagny_name}
                    location={application.location}
                    toggle={false}
                    userType={"compagny"}
                  /> */}
              <div className="application-list">
                  <div className="application-items">

                <p className="job-name">{application.job_name}</p>
                    <p>{application.first_name}</p>
                <p>{application.last_name}</p>
                <p>{application.phone}</p>
                <p>{application.cover_letter}</p>
                  </div>
                <hr></hr>
              </div>
              </>
                ))
              
              }
            
        </div>
    )
}

export default Application
