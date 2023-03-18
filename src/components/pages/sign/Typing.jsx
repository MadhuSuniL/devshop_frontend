import React from 'react'
import { useState , useEffect } from 'react';
const Typing = (props) => {

const [text, setText] = useState('')
const [fullText, setFullText] = useState(props.string)
const [index, setIndex] = useState(0)
const [timetype , settimetype] = useState(props.late)
const [base,setbase] = useState(props.pipe)
const [pipe , setpipe] = useState('<b class="text-[rgba(69.7%,10%,60.7%,1)]">|</b>')
const [tagbool , settagbool] = useState(false)
// const res_text = "According my machine learning model this device price will be , <br><br> <span class='text-4xl text-green-400 font-sans' >9,000 - 10,000 - 11,000</span>"
useEffect(()=>{
    setTimeout(function(){
        if (pipe == '<b class="text-[rgba(69.7%,10%,60.7%,1)]">|</b>'){
            setpipe('')
        }
        else{
            setpipe('<b class="text-[rgba(69.7%,10%,60.7%,1)]">|</b>')
        }
    },0)
})
useEffect(() => {
    setTimeout(function(){
        if (index < fullText.length) {
            settagbool(false)
            setTimeout(() => {
              setText(text.replace('<b class="text-[rgba(69.7%,10%,60.7%,1)]">|</b>','') + fullText[index]+pipe)
              setIndex(index + 1)
            }, props.speed)
          }
          else{
            text.replace('<b class="text-[rgba(69.7%,10%,60.7%,1)]">|</b>','')
            setbase(!base)
        }
          settimetype(2)
    },timetype)
}, [index])
  
    return (
        <div className=''>
        {/* <p>{props.pretext}</p> */}
        <br></br>
    <div className='text'>{<div dangerouslySetInnerHTML={{__html:text}}/>}<b className='text-cyan-400 text-md'>{props.extratext}</b></div>
    {!base ? <section><div dangerouslySetInnerHTML={{__html:props.tag}}/><button onClick={props.call} className="w-[20%] rounded-md text-md m-2 font-mono font-extrabold border-2 border-[rgba(69.7%,10%,60.7%,0.9)] md:w-[5%] ml-2">Go</button></section> : ''}   
    </div>
  )
}

export default Typing