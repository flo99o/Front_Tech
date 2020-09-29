import React from 'react'
import Comment from '../components/Comment'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Job from '../components/Job'

 const Homepage = () => {
    return (
        <div className="global_container global_container--homepage">
            <Hero/>
            <Job/>
            <Comment/>
            <Footer/>
        </div>
    )
}

export default Homepage