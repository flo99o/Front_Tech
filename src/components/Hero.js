import React from 'react'
import FilterBar from './FilterBar'
import NavBar from './Navbar'

 const  Hero = () => {
    return (
        <div className="hero">
            <header>
                <div className="logo">
                    Tech Work
                </div>
                <div className="connexion">
                    <a href="" className="login">Login</a>
                    <span>or</span>
                    <a href="" className="signup">Sign up</a>
                </div>
                <div className="heading-primary">
                    <h1 className="heading-primary--main">Find Your Next Job</h1>
                    <p className="heading-primary--sub">More then X job listed here.</p>
                </div>
            </header>
            <NavBar/>
            <FilterBar/>
        </div>
    )
}

export default Hero
