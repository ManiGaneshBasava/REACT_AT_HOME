import React from 'react'

const NavBar = ({totalCounters}) => {
  return (
    <div className="navbar navbar-light">
      <div className='navbar-brand'>
        <i className='fa fa-shopping-cart fa-lg m-2" aria-hidden="true"'/>
        <span
        className='badge badge-pill badge-info m2'
        style={{width:50,fontSize:"24px"}}
        >
        </span>
        {totalCounters} Items
      </div>
    </div>
  )
}

export default NavBar