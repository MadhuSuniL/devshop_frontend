import React, { useEffect, useState, useContext } from 'react'
import search from '../../images/search.png'
import  { useNavigate } from 'react-router-dom'
import SearchC from './context/SearchContext'

const Header = (props) => {

  const {key,work_mode,exp,salary,sort,change} = useContext(SearchC)

  const nav = useNavigate()
  const style = ''
  const SigninFrom = <form className='shadow-xl fixed top-[50%] left-[50%] w-[94%] md:w-auto font-bold translate-x-[-50%] p-5 rounded-lg translate-y-[-50%]  border-4 border-t-[rgba(69.7%,10%,60.7%,1)]'>
    <h1 className='text-[rgba(69.7%,10%,60.7%,1)] text-xl m-3'>Sign In</h1>
    <input type='email' id ='email' placeholder=' Enter your email..' className='m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]'/><br></br>
    <input type='password' id ='pass' placeholder=' Enter password..' className="m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]"/><br></br>
    <h1 className='text-black text-sm md:text-[11px] float-right m-3'>Don't have an account <span className='text-main cursor-pointer'>SignUp</span></h1>
  </form>


  const handlesearch = () =>{
    const key = document.getElementById('search').value

    localStorage.setItem('sort','r')
    localStorage.setItem('sal_type','y')
    localStorage.setItem('salary','0-7000000')
    localStorage.setItem('work_mode','a')
    localStorage.setItem('exp','a')
    localStorage.setItem('key',String(key))
 
    const path = window.location.pathname
    if(path == '/'){
      return nav('/search_/'+String(key))
    }
    window.location.href = "/search_/"+String(key)
  }

  function home(){
    window.location.href = '/'
  }


  function freshers(){
    document.getElementById('search').value = 'freshers'
        const key = document.getElementById('search').value
        localStorage.setItem('exp','f')
        localStorage.setItem('work_mode','a')
        localStorage.setItem('sort','r')
        localStorage.setItem('salary','0-700000')
        localStorage.setItem('key',key)
        window.location.href = '/search_/'+String(key)
  }
  function experiences(){
    document.getElementById('search').value = 'experience'
        const key = document.getElementById('search').value
        localStorage.setItem('exp','e')
        localStorage.setItem('work_mode','a')
        localStorage.setItem('sort','r')
        localStorage.setItem('salary','0-700000')
        localStorage.setItem('key',key)
        window.location.href = '/search_/'+String(key)
  }

  function snd(){
    document.getElementById('search').value = document.getElementById('search2').value
    const key = document.getElementById('search').value
    localStorage.setItem('key',key)
    window.location.href = '/search_/'+String(key)
  }


  return (
    <div>
    <div className='hidden md:flex p-2'>
        <h1 onClick={home} className='text-2xl cursor-pointer font-bold text-gray-700 mx-28 mr-5'><span className='text-[rgba(69.7%,10%,60.7%,1)]'>Dev</span>Shop</h1>
        <div className='flex ml-40 justify-around w-[44%]'>
        <input type='search' id='search' placeholder={props.fill} className='pl-2 border-[rgba(69.7%,10%,60.7%,1)] h-10 w-[200%] border-2 rounded-md'/>
        <button onClick={handlesearch} className='ml-2'><img src={search} className='w-20'/></button>
        </div>
        <h1 onClick={freshers} className='text-lg ml-36 cursor-pointer md:mt-2 font-bold'>Freshers</h1>
        <h1 onClick={experiences} className='text-lg ml-10 cursor-pointer md:mt-2 font-bold'>Experienced</h1>
        <h1 className='text-lg ml-10 cursor-pointer md:mt-2 font-bold'>Sing in</h1>
    </div>
    <div className='md:hidden p-2'>
        <div className='flex justify-between'>
        <h1 onClick={home} className='text-xl ml-0 font-bold text-gray-700'><span className='text-[rgba(69.7%,10%,60.7%,1)]'>Dev</span>Shop</h1>
        <div className='flex'>
        <h1 onClick={freshers} className='text-[16px] ml-0 cursor-pointer font-bold'>Freshers</h1>
        <h1 onClick={experiences} className='text-[16px] ml-3 cursor-pointer font-bold'>Experienced</h1>
        <h1 className='text-[16px] ml-3 cursor-pointer font-bold'>Sing in</h1>
        </div>
        </div>
        <div className='flex justify-around w-[100%] mt-[3px]'>
        <input type='search' placeholder={props.fill} id='search2' className='pl-2 border-[rgba(69.7%,10%,60.7%,1)] h-8 w-[200%] border-2 rounded-md'/>
        <button onClick={snd} className='ml-2'><img src={search} className='w-20'/></button>
        </div>
    </div>
        <div>
          {/* {SigninFrom} */}
        </div>

    </div>
  )
}

export default Header

// rgba(69.7%,10%,60.7%,0.2