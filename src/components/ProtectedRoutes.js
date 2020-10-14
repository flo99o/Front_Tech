import React, { Component } from 'react'
import {Route} from 'react-router-dom'

export const ProtectedRoutes = ({component: Component, ...rest}) => {
    return (
        <div>
            <Route {...rest} render={
                props => <Component {...rest} {...props}/>
            }/>
        </div>
    )
}
