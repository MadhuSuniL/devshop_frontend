import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Dummy = () => {
    const {key} = useParams()
    
    const nav = useNavigate()
    useEffect(()=>{
       return nav('/search_/'+key)
    },[key])




  return (
    <div>Dummy</div>
  )
}

export default Dummy