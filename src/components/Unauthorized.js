import React from 'react'
import {Link} from 'react-router-dom'

export const Unauthorized = () => {
    return (
        <div>
            <p><Link to='/'>Back to Home</Link></p>
        </div>
    )
}