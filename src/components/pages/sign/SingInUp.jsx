import React, { useState } from 'react'

const SingUp = () => {

  const [sign_index,setsign_index] = useState(3)


const handleform = (event)=>{
  const email = event.target[0].value
  const password = event.target[1].value
  const confirm_password = event.target[2].value
  if (password == confirm_password){
    alert('called 1st api')
    setsign_index(sign_index+1)
  }
  else{
    alert('error')
  }
  event.preventDefault()
}

  const SignupFrom = <form onSubmit={handleform} className='shadow-xl fixed top-[50%] left-[50%] w-[94%] md:w-auto font-bold translate-x-[-50%] p-5 rounded-lg translate-y-[-50%]  border-4 border-t-[rgba(69.7%,10%,60.7%,1)]'>
  <h1 className='text-[rgba(69.7%,10%,60.7%,1)] text-xl m-3'>Sign up 1-3</h1>
  <input type='email' required id ='email' placeholder=' Email..' className='m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]'/><br></br>
  <input type='password' minLength={1} rrequired id ='pass' placeholder=' Password..' className="m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]"/><br></br>
  <input type='password' minLength={1} rrequired id ='pass2' placeholder=' Confirm Password..' className='m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]'/><br></br>
  <input type='submit' value='submit' className='m-2 border-2 rounded-md p-2 hover:text-white float-right border-black text-white bg-[rgba(69.7%,10%,60.7%,1)]'/><br></br>
  <h1 className='text-black text-sm md:text-[11px] float-right m-3'>Already have an account <span className='text-main cursor-pointer'>SignIp</span></h1>
</form>

const handleform2 = (event)=>{
  const name = event.target[0].value
  const mobile = event.target[1].value
  const profile = event.target[2].value
  const role = event.target[3].value
  const skills = event.target[4].value
  const experience = Number(event.target[5].value)
  if (experience == 0 || experience == null ){
    alert('called 2nd fresher api')
    setsign_index(sign_index+2)
  }
  else{
    alert('called 2nd exp api')
    setsign_index(sign_index+1)
  }
  event.preventDefault()
}

  const SignupFrom2 = <form onSubmit={handleform2} className='shadow-xl fixed top-[50%] left-[50%] w-[94%] md:w-auto font-bold translate-x-[-50%] p-5 rounded-lg translate-y-[-50%]  border-4 border-t-[rgba(69.7%,10%,60.7%,1)]'>
  <h1 className='text-[rgba(69.7%,10%,60.7%,1)] text-xl m-3'>Sign up 2-3</h1>
  <input type='number' id ='exp' min={10} required placeholder=' Mobile No..' className="m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]"/><br></br>  
  <input type='text' required id ='name' placeholder=' Name..' className='m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]'/><br></br>
  Profile : <input type='file' required id ='img' placeholder=' Photo..' className='m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]'/><br></br>
  <input type='text' id ='role' required placeholder=' Role..' className="m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]"/><br></br>
  <textarea type='text' id ='skills ' required placeholder=' Enter your skills with sperating ","' className="m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]"/><br></br>
  <input type='number' id ='exp' required placeholder=' Experience (in years)' className="m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]"/><br></br>
  <input type='submit' value='submit' className='m-2 border-2 rounded-md p-2 hover:text-white float-right border-black text-white bg-[rgba(69.7%,10%,60.7%,1)]'/><br></br>
</form>

const handleform3 = (event)=>{
  const prole = event.target[0].value
  const pcompany = event.target[1].value
  const portfolio_link = event.target[2].value
  const price = event.target[3].value
  const education = event.target[4].value
  const summary = event.target[5].value
  
  alert('called 3nd exp api')
  
  
  event.preventDefault()
}



  const SignupFrom3 = <form onSubmit={handleform3} className='shadow-xl fixed top-[50%] left-[50%] w-[94%] md:w-auto font-bold translate-x-[-50%] p-5 rounded-lg translate-y-[-50%]  border-4 border-t-[rgba(69.7%,10%,60.7%,1)]'>
  <h1 className='text-[rgba(69.7%,10%,60.7%,1)] text-xl m-3'>Sign up 3-3</h1>
  <input type='text' id ='input' placeholder=' Previous role..' className="m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]"/><br></br>
  <input type='text' id ='input' placeholder=' Previous campany..' className="m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]"/><br></br>
  <input type='url' id ='input' placeholder=' Paste portfolio link..' className="m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]"/><br></br>
  <input type='number' id ='input' placeholder=' Expecting monthly salary..' className="m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]"/><br></br>
  <input type='text' id ='input' placeholder=' Education..' className="m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]"/><br></br>
  Work mode : <select id ='input' className="m-2 border-2 rounded-md p-2 hover:text-white border-[rgba(69.7%,10%,60.7%,1)]">
    <option value='home'>Work from home</option>
    <option value='office'>Work from office</option>
    <option value='both'>Both</option>
    </select><br></br>
    <textarea type='text' id ='skills ' required placeholder=' Summary....' className="m-2 w-[90%] border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]"/><br></br>
  <input type='submit' value='submit' className='m-2 border-2 rounded-md p-2 float-right border-black text-white bg-[rgba(69.7%,10%,60.7%,1)]'/><br></br>

</form>


const handleform4 = (event)=>{
  const portfolio_link = event.target[0].value
  const price = event.target[1].value
  const education = event.target[2].value
  const summary = event.target[3].value
  
  alert('called 3rd api')
  
  event.preventDefault()
}


  const SignupFrom4 = <form onSubmit={handleform4} className='shadow-xl fixed top-[50%] left-[50%] w-[94%] md:w-auto font-bold translate-x-[-50%] p-5 rounded-lg translate-y-[-50%]  border-4 border-t-[rgba(69.7%,10%,60.7%,1)]'>
  <h1 className='text-[rgba(69.7%,10%,60.7%,1)] text-xl m-3'>Sign up 3-3</h1>
  <input type='url' id ='input' placeholder=' Paste portfolio link..' className="m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]"/><br></br>
  <input type='number' id ='input' placeholder=' Expecting monthly salary..' className="m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]"/><br></br>
  <input type='text' id ='input' placeholder=' Education..' className="m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]"/><br></br>
  Work mode : <select id ='input' className="m-2 border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]">
    <option value='home'>Work from home</option>
    <option value='office'>Work from office</option>
    <option value='both'>Both</option>
    </select><br></br>
    <textarea type='text' id ='skills ' required placeholder=' Summary....' className="m-2 w-[90%] border-2 rounded-md p-2 border-[rgba(69.7%,10%,60.7%,1)]"/><br></br>
  <input type='submit' value='submit' className='m-2 border-2 rounded-md hover:text-white p-2 float-right border-black text-white bg-[rgba(69.7%,10%,60.7%,1)]'/><br></br>

</form>

const forms = [SignupFrom,SignupFrom2,SignupFrom3,SignupFrom4]



  return (
    <div>
        <h1 className='text-5xl md:text-4xl text-center font-bold text-gray-700 mt-[20%] md:mt-[3%]'><span className='text-[rgba(69.7%,10%,60.7%,1)]'>Dev</span>Shop</h1>
      <center>
      {forms[sign_index]}
      </center>
    </div>
  )
}

export default SingUp