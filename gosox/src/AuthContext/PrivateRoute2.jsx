import React from 'react'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'

const PrivateRoute2 = ({children}) => {
    const {isAuth21}=useContext(AuthContext)

    if(!isAuth21){
        return <Navigate to="/adminlogin"/>
    }


  return children
}

export default PrivateRoute2