import React, { useState } from 'react'
import Header from './Header'
import Category from './Category'
import ResCards from './ResCards'
import { useParams } from 'react-router-dom';

const Result = () => {

  const { key } = useParams();


  const [filt , setfilt] = useState(false)

  const handlefilt = () =>{
    setfilt(!filt)
  }


  return (
    <div>
        <Header fill={key}/>
        <h1 onClick={handlefilt}className='float-right m-2 text-[rgba(69.7%,10%,60.7%,1)] mb-2 md:mb-4 cursor-pointer'>Filters</h1>
        <div className='flex-reverse md:flex m-1 p-1'> 
            <ResCards filter={filt} change={setfilt} search_key={key}/>
            {/* <Category filter={filt} change={setfilt}/> */}
        </div>
    
    </div>
  )
}

export default Result