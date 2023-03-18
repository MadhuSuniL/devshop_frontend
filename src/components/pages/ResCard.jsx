import React from 'react'
import user from '../../images/logo192.png'
import RondomImg from './RondomImg2'
const ResCard = (props) => {

  function title(str){
    var t = ''
    var c = 0
    str = String(str).toLowerCase()
    for(let s in str){
        if(s==0){
            t = t+String(str[s]).toLocaleUpperCase()
        }
        else{
            t = t+String(str[s])
        }
    }
    return t
  }

  function indianCurrencyFormat(ruppes) {
    let finalRuppes = "";
    let count = 0;
  
    if (ruppes < 1000) {
      return ruppes.toString();
    } else if (ruppes > 999 && ruppes < 9999) {
      for (let i of ruppes.toString()) {
        if (count === 1) {
          finalRuppes += "," + i;
        } else {
          finalRuppes += i;
        }
        count++;
      }
      return finalRuppes;
    } else if (ruppes > 9999 && ruppes < 99999) {
      for (let i of ruppes.toString()) {
        if (count === 2) {
          finalRuppes += "," + i;
        } else {
          finalRuppes += i;
        }
        count++;
      }
      return finalRuppes;
    } else if(ruppes > 99999 && ruppes < 999999) {
      for (let i of ruppes.toString()) {
        if (count === 1 || count === 3) {  //50,00,000
          finalRuppes += "," + i;
        } else {
          finalRuppes += i;
        }
        count++;
      }
      return finalRuppes;
    }
    else{
      for (let i of ruppes.toString()) {
        if (count === 2 || count === 4) {  //50,00,000
          finalRuppes += "," + i;
        } else {
          finalRuppes += i;
        }
        count++;
      }
      return finalRuppes;
    }
  }

  function make_lpa(ruppes){
      var lpa = ruppes
      return lpa
      var lpa = String(lpa)
      if(lpa[1] == '.'){
        return lpa.slice(0,3)
      }
      else{
        return lpa.slice(0,4)
      }
  }
  


  return (
    <div className='rounded-md hover:border-2 w-[126%] md:w-[100%] mb-3 m-2 md:m-2 p-2 hover:scale-105 ease-linear duration-200 cursor-pointer shadow-xl border-[rgba(69.7%,10%,60.7%,1)]'>
    
        {props.profile == '' ? <RondomImg/> : ''}
        <br></br>
        <h1 className='h-6 font-bold text-main text-center'>{props.name}</h1>
        <h1 className='h-7 font-bold text-tcenter'><span className='font-thin'>Role</span> : {title(props.role)}</h1>{props.role.length > 23 ? <br></br> : ''}
        <h1 className='h-7 font-bold text-tcenter'><span className='font-thin'>Company</span> : {props.exp == 0 ? '-' : props.company}</h1>{props.company.length > 21 ? <br></br> : ''}
        <h1 className='h-7 font-bold text-tcenter'><span className='font-thin'>Experience</span> : {props.exp == 0 ? 'Fresher' : props.exp+' Years' } </h1>
        <h1 className='h-7 font-bold text-3xl mt-5 text-gray-500 my-auto text-center'>₹{props.price} LPA</h1>
        <br></br>
    </div>
  )
}

export default ResCard