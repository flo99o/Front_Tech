import React ,{useState} from 'react'
import {Link} from 'react-router-dom'

export const Unauthorized = (userType) => {


    return (
        <div>
            <p><Link to='/'>Back to Home</Link></p>
        </div>
    )
}
