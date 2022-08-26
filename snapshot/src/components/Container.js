import React, { useContext, useEffect } from 'react'
import { PhotoContext } from '../context/PhotoContext'
import Gallery from './Gallery'
import Loading from './Loading'

const Container = ({searchTerm}) => {
    const {images,loading,runSearch}=useContext(PhotoContext)

    useEffect(()=>{
        runSearch(searchTerm)
    },[searchTerm])

  return (
    <div>
        {loading?<Loading/>:<Gallery data={images}/>}
    </div>
  )
}

export default Container