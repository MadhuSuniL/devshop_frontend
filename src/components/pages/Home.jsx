import React, { useEffect, useState } from 'react'
import Header from './Header'
import img1 from '../../images/slider/1.jpg'
import img2 from '../../images/slider/2.jpg'
import img3 from '../../images/slider/3.jpg'
import img4 from '../../images/slider/4.png'
import ai2 from '../../images/devs/icons/ai2.png'
import ai from '../../images/devs/icons/ai.png'
import web from '../../images/devs/icons/web.png'
import ds from '../../images/devs/icons/ds.png'
import ml from '../../images/devs/icons/ml.png'
import a from '../../images/devs/icons/a.png'
import RondomImg  from './RondomImg'



const Home = () => {

    const url = 'https://devshop.pythonanywhere.com'
    
    const [ai_sample_data,setai_sample_data] = useState([])
    const [ml_sample_data,setml_sample_data] = useState([])
    const [data_sample_data,setdata_sample_data] = useState([])
    const [web_sample_data,setweb_sample_data] = useState([])
    const [countDevs,setcountDevs] = useState({})
    
    
  
    
    // for ai
    async function ai_sample(){
        await fetch(`${url}/ai_sample`)
        .then(res => res.json())
        .then(data => setai_sample_data(data))  
}
   // for ml
   async function ml_sample(){
    await fetch(`${url}/ml_sample`)
    .then(res => res.json())
    .then(data => setml_sample_data(data))  
}
   // for data
   async function data_sample(){
    await fetch(`${url}/data_science_sample`)
    .then(res => res.json())
    .then(data => setdata_sample_data(data))  
}
   // for web
   async function web_sample(){
    await fetch(`${url}/web_sample`)
    .then(res => res.json())
    .then(data => setweb_sample_data(data))  
}

   // for count devs
   async function count_devs(){
    await fetch(`${url}/count_devs`)
    .then(res => res.json())
    .then(data => setcountDevs(data))  
}

const main=()=>{
        ai_sample()
        web_sample()
        data_sample()
        ml_sample()
        count_devs()
}

    useEffect(main,[])

    
  function ai_call(){
    document.getElementById('search').value = 'ai'
        const key = document.getElementById('search').value
        localStorage.setItem('key',key)
        window.location.href = '/search_/'+String(key)
  }
  function web_call(){
    document.getElementById('search').value = 'web'
        const key = document.getElementById('search').value
        localStorage.setItem('key',key)
        window.location.href = '/search_/'+String(key)
  }
  function data_call(){
    document.getElementById('search').value = 'data'
        const key = document.getElementById('search').value
        localStorage.setItem('key',key)
        window.location.href = '/search_/'+String(key)
  }
  function ml_call(){
    document.getElementById('search').value = 'Machine Learning'
        const key = document.getElementById('search').value
        localStorage.setItem('key',key)
        localStorage.setItem('exp','e')
        window.location.href = '/search_/'+String(key)
  }
  function ai_e_call(){
    document.getElementById('search').value = 'ai'
        const key = document.getElementById('search').value
        localStorage.setItem('key',key)
        window.location.href = '/search_/'+String(key)
  }
  function web_e_call(){
    document.getElementById('search').value = 'web'
        const key = document.getElementById('search').value
        localStorage.setItem('exp','e')
        localStorage.setItem('key',key)
        window.location.href = '/search_/'+String(key)
  }
  function data_e_call(){
    document.getElementById('search').value = 'data'
        const key = document.getElementById('search').value
        localStorage.setItem('exp','e')
        localStorage.setItem('key',key)
        window.location.href = '/search_/'+String(key)
  }
  function ml_e_call(){
    document.getElementById('search').value = 'Machine Learning'
        const key = document.getElementById('search').value
        localStorage.setItem('exp','e')
        localStorage.setItem('key',key)
        window.location.href = '/search_/'+String(key)
  }


    return (
    <div><Header/>
    <div className='grid md:grid-cols-2 my-2 duration-500 mx-2'>
        <div onClick={ai_call} className='flex m-1 shadow-xl hover:m-2 hover:md:m-3 hover:border-2 border-gray-600 ease-in-out duration-200 md:m-2 justify-between rounded-md bg-gradient-to-b from-[rgba(69.7%,10%,60.7%,0.7)] to-white'>
        <h1 className='ml-5 md:ml-52 text-xl md:text-3xl text-white md:m-24 mt-7 md:mt-24'>AI ({countDevs['ai']+1000})</h1>
        <img src={ai2} className='hover:scale-110 duration-300 md:m-5 h-[80px] m-2 md:h-[200px] w-[20%] md:w-[25%]'/>
        </div>
        <div onClick={ml_call} className='flex m-1 shadow-xl hover:m-2 hover:md:m-3 ease-in-out hover:border-2 border-gray-600 duration-200 md:m-2 justify-between rounded-md bg-gradient-to-b from-[rgba(69.7%,10%,60.7%,0.7)] to-white'>
        <h1 className='ml-5 md:ml-52 text-xl md:text-3xl text-white md:m-24 mt-7 md:mt-24'>ML ({countDevs['ml']+1000})</h1>
        <img src={ml} className='hover:scale-110 duration-300 h-[80px] md:m-5 m-2 md:h-[200px] w-[20%] md:w-[25%]'/>
        </div>
        <div onClick={data_call} className='flex m-1 shadow-xl hover:m-2 md:m-2 hover:md:m-3 hover:border-2 border-gray-600 ease-in-out duration-200 justify-between rounded-md bg-gradient-to-b from-[rgba(69.7%,10%,60.7%,0.7)] to-white'>
        <h1 className='ml-5 md:ml-52 text-xl md:text-3xl text-white md:m-24 mt-7 md:mt-24'>Data Science ({countDevs['data']+1000})</h1>
        <img src={ds} className='hover:scale-110 duration-300 md:m-5 h-[80px] m-2 md:h-[200px] w-[22%] md:w-[28%]'/>
        </div>
        <div onClick={web_call} className='flex m-1 shadow-xl hover:m-2 md:m-2 hover:md:m-3 ease-in-out hover:border-2 border-gray-600 duration-200 justify-between rounded-md bg-gradient-to-b from-[rgba(69.7%,10%,60.7%,0.7)] to-white'>
        <h1 className='ml-5 md:ml-52 text-xl md:text-3xl text-white md:m-24 mt-7 md:mt-24'>WEB ({countDevs['web']+1000})</h1>
        <img src={web} className='hover:scale-110 duration-300 h-[80px] m-2 md:m-5 md:h-[200px] w-[22%] md:w-[28%]'/>
        </div>
    </div>
    {/* new ai Develepers */}
    <div className='grid md:grid-cols-2'>
    <div className='mx-2'>
        <h1 className='m-1 mb-2 text-[rgba(69.7%,10%,60.7%,0.7)] md:ml-2 font-bold md:text-xl'>New Experienced AI Develepers</h1>
        {/* cards */}
        <div  className='grid grid-cols-2 md:grid-cols-3'>
            {ai_sample_data.map((dev)=> {
               return <div className='m-1 shadow-xl hover:m-2 hover:border-2 border-gray-500 p-2 hover:md:m-3 ease-in-out duration-200 md:m-2 justify-between rounded-md bg-white'>
                <RondomImg/>
        <h1 className='m-3 md:ml-4 text-md md:text-lg text-center text-main font-bold text-gray-600'>{dev['name']} </h1>
        <h1 className='m-3 md:ml-4 text-sm md:text-md text-center font-bold text-green-600'>{dev['experience']} years </h1>
            </div>
            })}            
        </div>
        <span className='text-sm float-right m-2 text-[rgba(69.7%,10%,60.7%,0.7)] font-bold underline underline-offset-4 cursor-pointer' onClick={ai_e_call} >Show more</span>
    </div>
    
    {/* new ml devs */}
    <div className='mx-2'>
        <h1 className='m-1 mb-2 md:ml-2 font-bold md:text-xl text-[rgba(69.7%,10%,60.7%,0.7)]'>New Experienced Machine Learning Develepers</h1>
        {/* cards */}
        <div  className='grid grid-cols-2 md:grid-cols-3'>
        {ml_sample_data.map((dev)=> {
               return <div className='m-1 shadow-xl hover:m-2 hover:border-2 border-gray-500 p-2 hover:md:m-3 ease-in-out duration-200 md:m-2 justify-between rounded-md bg-white'>
                <RondomImg/>
        <h1 className='m-3 md:ml-4 text-md md:text-lg text-center font-bold text-main text-gray-600'>{dev['name']} </h1>
        <h1 className='m-3 md:ml-4 text-sm md:text-md text-center font-bold text-green-600'>{dev['experience']} years </h1>
            </div>
            })}
        </div>
        <span className='text-sm float-right m-2 text-[rgba(69.7%,10%,60.7%,0.7)] font-bold underline underline-offset-4 cursor-pointer' onClick={ml_e_call}>Show more</span>
    </div>
    
    {/* data Web devs */}
    <div className='mx-2'>
        <h1 className='m-1 mb-2 md:ml-2 font-bold md:text-xl text-[rgba(69.7%,10%,60.7%,0.7)]'>New Experienced Data Sceince Develepers</h1>
        {/* cards */}
        <div  className='grid grid-cols-2 md:grid-cols-3'>
        {data_sample_data.map((dev)=> {
               return <div className='m-1 shadow-xl hover:m-2 hover:border-2 border-gray-500 p-2 hover:md:m-3 ease-in-out duration-200 md:m-2 justify-between rounded-md bg-white'>
                <RondomImg/>
        <h1 className='m-3 md:ml-4 text-md md:text-lg text-center font-bold text-main text-gray-600'>{dev['name']} </h1>
        <h1 className='m-3 md:ml-4 text-sm md:text-md text-center font-bold text-green-600'>{dev['experience']} years </h1>
            </div>
            })}
        </div>
        <span className='text-sm float-right m-2 text-[rgba(69.7%,10%,60.7%,0.7)] font-bold underline underline-offset-4 cursor-pointer' onClick={data_e_call}>Show more</span>
    </div>
    
    {/* new web devs */}
    <div className='mx-2'>
        <h1 className='m-1 mb-2 md:ml-2 font-bold md:text-xl text-[rgba(69.7%,10%,60.7%,0.7)]'>New Experienced Web Develepers</h1>
        {/* cards */}
        <div  className='grid grid-cols-2 md:grid-cols-3'>
        {web_sample_data.map((dev)=> {
               return <div className='m-1 shadow-xl hover:m-2 hover:border-2 border-gray-500 p-2 hover:md:m-3 ease-in-out duration-200 md:m-2 justify-between rounded-md bg-white'>
                <RondomImg/>
        <h1 className='m-3 md:ml-4 text-md md:text-lg text-center font-bold text-main text-gray-600'>{dev['name']} </h1>
        <h1 className='m-3 md:ml-4 text-sm md:text-md text-center font-bold text-green-600'>{dev['experience']} years </h1>
            </div>
            })}
        </div>
        <span className='text-sm float-right m-2 text-[rgba(69.7%,10%,60.7%,0.7)] font-bold underline underline-offset-4 cursor-pointer'  onClick={web_e_call}>Show more</span>
    </div>
    </div>
    
    
    
    </div>
  )
}

export default Home
