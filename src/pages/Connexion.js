import React from 'react'

 const UserPage =() => {
    return (
        <div className="container--connexion">
            <div className="box">
                <div className="signIn">
                    <div className="inner-box">
                    <form action="#">
			<h1>Sign in</h1>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
                    </div>
                </div>
                <div className="signUp">
                    <div className="inner-box">
                        <h1>Hello Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button>sign up</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserPage
