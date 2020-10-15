import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import { Unauthorized } from './Unauthorized'



 const ProtectedRoutes = ({ component: Component, ...rest }) => {
    
    const getUserType = JSON.parse(localStorage.getItem('dataKey'))
    const userType = getUserType.userType
    
    return (
        <Route {...rest} render={
            props => {
              if (userType) {
                return <Component {...rest} {...props} />
              } else {
                return <Redirect to={Unauthorized} />

              }
              
            }
        
          } />
        )
      }
     console.log('hhheeeeel')
      
export default ProtectedRoutes;
    
