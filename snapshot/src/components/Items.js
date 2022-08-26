import React from 'react'
import Container from './Container'

const Items = ({searchTerm}) => {
  return (
    <div>
        <h2>{searchTerm} Pictures</h2>
        <Container searchTerm={searchTerm}/>
    </div>
  )
}

export default Items