import React from 'react'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'

import { AuthContext } from './AuthContext'

const PrivateRoute = ({children}) => {
    const {isAuth}=useContext(AuthContext)

    if(!isAuth){
        return <Navigate to="/login"/>
    }


  return children
}

export default PrivateRoute