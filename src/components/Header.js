import React from 'react'

const Header = () => {
    return (
        <header>
        <div className="logo">Tech Work</div>
        <div className="menuburger">
            <svg>
                <use xlinkHref="assets/sprite.svg#icon-text"></use>
            </svg>
        </div>
        {/* <div className="connexion">
          <a href="" className="login">
            Login
          </a>
          <span>or</span>
          <a href="" className="signup">
            Sign up
          </a>
        </div> */}
        
      </header>
    )
}

export default Header
