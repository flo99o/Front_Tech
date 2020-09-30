import React from 'react'
import Comment from '../components/Comment'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import LatestJob from '../components/LatestJob'
import FilterBar from '../components/FilterBar'
 const Homepage = () => {
    return (
        <div className="global_container global_container--homepage">
            <Hero/>
            <FilterBar />
            <LatestJob/>
            <Comment/>
            <Footer/>
        </div>
    )
}

export default Homepage