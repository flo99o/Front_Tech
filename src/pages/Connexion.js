import React from "react";

const UserPage = () => {
  return (
    <div className="container--connexion">
      <div className="box">
        <div className="container-signIn">
          <div className="signIn">
            <div className="inner-box">
              <form className="signIn__form" action="#">
                <h1 className="heading-primary--main">Sign in</h1>
                {/* <span>or use your account</span> */}
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                {/* <a href="">Forgot your password?</a> */}
                <button className="btn btn--round">Sign In</button>
              </form>
            </div>
          </div>
          <div className="hello-friend">
            <div className="inner-box">
              <h1 className="heading-primary--main">Hello Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                id="signUp"
                className="btn btn--round btn--transparent"
                // onClick={() => getSignIn()}
              >
                sign up
              </button>
            </div>
          </div>
        </div>
        <div className="container-signUp">
          <div className="welcome-back">
            <div className="inner-box">
              <h1 className="heading-primary--main">Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button id="signIn" className="btn btn--round btn--transparent">
                Sign In
              </button>
            </div>
          </div>
          <div className="create-account">
            <div className="inner-box">
              <form className="create-account__form" action="#">
                <h1 className="heading-primary--main">Create Account</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="btn btn--round">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
