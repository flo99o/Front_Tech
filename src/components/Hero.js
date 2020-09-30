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
                <h1 className="title">Find Your Next Job</h1>
                <h2 className="subtitle">More then X job listed here.</h2>
            </header>
            <NavBar/>
            <FilterBar/>
        </div>
    )
}

export default Hero
