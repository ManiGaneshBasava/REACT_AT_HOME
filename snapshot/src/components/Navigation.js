import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'


const Navigation = () => {
  return (
    <nav className="main-nav">
        <ul>
            <li><NavLink to="/mountain">Mountain</NavLink></li>
            <li><NavLink to="/beach">Beaches</NavLink></li>
            <li><NavLink to="/bird">birds</NavLink></li>
            <li><NavLink to="/food">food</NavLink></li>
        </ul>
        <Outlet/>
    </nav>
   
  )
}

export default Navigation