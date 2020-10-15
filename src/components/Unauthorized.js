import React from 'react'
import { Link } from 'react-router-dom'

 const Unauthorized = () => {
    return (
        <div>
            <div className='container'>
                <div class="gandalf">
                    <div class="fireball"></div>
                    <div class="skirt"></div>
                    <div class="sleeves"></div>
                    <div class="shoulders">
                        <div class="hand left"></div>
                        <div class="hand right"></div>
                    </div>
                    <div class="head">
                        <div class="hair"></div>
                        <div class="beard"></div>
                    </div>
                </div>
                <div class="message">
                    <h1>403 - You Shall Not Pass</h1>
                    <h2>Uh oh, Gandalf is blocking the way!<br />Hello sir,
                     Gandalf is blocking the way, maybe you got lost please find your way back clicking on the link below 👇:  </h2>
                </div>
                <p><Link to='/'>Back to Home</Link></p>
            </div>

        </div>

    )
}
export default Unauthorized;