import React, { useState, useEffect }from 'react'
import axios from 'axios'
//components
import Category from './Category'
import HeroProfile from '../components/HeroProfile'

const UserProfile = (props) => {

    //const id = props.params.id
    const id = 1

    const [myDetails, setMyDetails] = useState([])
    const [myApplications, setMyApplications] = useState([])
    const [myOffers, setmyOffers] = useState([])

    useEffect(() => {
        const getMyDetails = async () => {
            const url = `http://localhost:5000/users//userDetails/${id}`;
            const result = await axios.get(url);
            setMyDetails(result.data);
          }
          getMyDetails()
    }, [])

    const userImg = myDetails.map(item => item.image)
    return (
        <>
        <HeroProfile photo={userImg} userType={'Daniella'}/>
        <div className="container">
            <div className="inner--profilePage">
                <div className="application">
                    <Category name={"Mes candidatures"}/>
                </div>
                <div className="ad">
                    <Category name={"Mes offres sauvergardées"}/>
                </div>
                <div className="details">
                    <Category name={"Mes infos personnelles"} />
                    {myDetails.map(item => (
                    <div className="myDetails">
                        
                    </div>

                    ))}
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default UserProfile
