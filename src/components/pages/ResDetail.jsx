import React from 'react'
import Header from './Header'
import profile from '../../images/logo192.png'
const ResDetail = () => {
  return (
    <div>
        <Header/>
        <div className='grid m-2 rounded-md md:grid-cols-2 bg-gradient-to-b from-[rgba(69.7%,10%,60.7%,0.7)] to-white'>
            <center>
            <img src={profile}/>
            </center>
            <div className='p-3'>
                <h1 className='m-5 md:mt-14 text-4xl text-center'>Python Developer</h1>
                <div className='flex justify-around'>
                <h1 className='text-2xl text-center bg-black rounded-md border-2 border-white text-white p-2'>9948377187</h1>
                <h1 className='text-2xl text-center bg-black rounded-md border-2 border-white text-white p-2'>madhu@gmail.com</h1>
                </div>
            </div>
        </div>

        <div className='border-4 border-main p-5 inset m-3 rounded-md'>
            <h1 className='text-lg'>Name : Madhu</h1>
            <h1 className='text-lg'>Role : Python Developer</h1>
            <h1 className='text-lg'>Price : 80,000</h1>
        </div>





    </div>
  )
}

export default ResDetail