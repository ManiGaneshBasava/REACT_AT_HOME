import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext'


export const ProtectedRoute = ({children}) => {
  
  const {user} = useUserAuth();
  console.log(user);

    if(!user){
        return <Navigate to="/" />
    }
    return children;
};

export const LoggedInRoute =()=>{
    const {user} = useUserAuth();
    return(
        <>
        {!user?<Outlet/>:<Navigate to="/home"/>}
        </>
    )
}
