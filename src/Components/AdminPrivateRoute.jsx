import React from 'react'
import { Navigate } from 'react-router-dom'
const AdminPrivateRoute = ({ children }) => {

    const isAuthAdmin = JSON.parse(localStorage.getItem("isAuthAdmin")) || false
    //console.log(children)
    if (isAuthAdmin === false) {
        return <Navigate to="/admin-login" replace={true} />
    }
    return children
}
export default AdminPrivateRoute