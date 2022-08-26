import React from 'react'
import {  useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

export  const  PrivateRoutes =(props)=> {
    const state = useSelector(state=>state)
    return (
        <>
            {state.isLogin ? <Outlet  /> : <Navigate to="/login" />}
        </>
    )
}

export  const LoggedInRoute=()=> {
    const state = useSelector(state=>state)
    return (
        <>
            {!state.isLogin ? <Outlet  /> : <Navigate to="/details" />}
        </>
    )
}

export const EditLogin = ()=>{
    const state = useSelector(state=>state.isEdit)
    return(
        <>
            {state ? <Outlet/> : <Navigate to="/details"/>}
        </>
    )
}

export const EditLogout = ()=>{
    const state = useSelector(state=>state.isEdit)
    return(
        <>
            {!state ? <Outlet/> : <Navigate to="/edit"/>}
        </>
    )
}


