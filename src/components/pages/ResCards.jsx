import React, { useEffect, useState, useContext } from 'react'
import ResCard from './ResCard'
import SearchC from './context/SearchContext'


const ResCards = (props) => {
  const url = 'https://devshop.pythonanywhere.com'

    const [cards,setCards] = useState([])
    const [loading,setloading] = useState(false)
    // const {key,work_mode,exp,salary,sort,change} = useContext(SearchC)
    const [work_mode,setwork_mode] = useState(localStorage.getItem('work_mode'))
    const [exp,setexp] = useState(localStorage.getItem('exp'))
    const [salary,setsalary] = useState(localStorage.getItem('salary'))
    const [sort,setsort] = useState(localStorage.getItem('sort'))

    async function cards_data(){
      setloading(true)
        await fetch(`${url}/result/cards`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          'sort':localStorage.getItem('sort'),
          'work_mode':localStorage.getItem('work_mode'),
          'exp':localStorage.getItem('exp'),
          'key':localStorage.getItem('key'),
          'salary':localStorage.getItem('salary')
        })
      })
      .then(res => res.json())
      .then(data => setCards(data))
      setloading(false)
   }
    useEffect(cards_data,[props.search_key,localStorage])
    

    const handlemainfilter = () =>{
      const n_sort = document.getElementById('sort').value
      const n_salary = document.getElementById('sal').value
      const n_work_mode = document.getElementById('work').value
      const n_exp = document.getElementById('exp').value

      // setsort(n_sort)
      // setsalary(n_salary)
      // setexp(n_exp)
      // setwork_mode(n_work_mode)
      localStorage.setItem('sort',n_sort)
      localStorage.setItem('salary',n_salary)
      localStorage.setItem('work_mode',n_work_mode)
      localStorage.setItem('exp',n_exp)

      // window.location.reload()


    }
  

     const handlefilt=()=>{
      props.change(!props.filter)
    }

    const sortup=(e)=>{
        localStorage.setItem('sort',e.target.value)
        setsort(e.target.value)
        cards_data()
      }
    const exptup=(e)=>{
        setexp(e.target.value)
        localStorage.setItem('exp',e.target.value)
        cards_data()

    }
    const salup=(e)=>{
        setsalary(e.target.value)
        localStorage.setItem('salary',e.target.value)
        cards_data()
      }
    const workup=(e)=>{
      setwork_mode(e.target.value)
      localStorage.setItem('work_mode',e.target.value)
      cards_data()
    }
    
    const typeup=(e)=>{
      localStorage.setItem('sal_type',e.target.value)
      cards_data()
    }

    const res = cards.map((card)=>{
      return <ResCard name={card.name} profile={card.profile} role={card.role} company={card.p_company} exp={card.experience} price={card.price} />
     })
  


  return (
    <div>

    <div className='w-[78%]'>
        <br></br>
        <br></br>
      <div className='grid ml-0 pr-3 md:grid-cols-4'>
     {res}


    {loading ? <div className='fixed top-[50%] left-[50%] md:left-[40%] translate-x-[-50%] translate-y-[-50%]'><div className='flex'><div className='bg-main animate-bounce rounded-[50%] m-2 w-6 h-5'></div><div className='bg-main animate-bounce rounded-[50%] m-2 w-6 h-5'></div><div className='bg-main animate-bounce rounded-[50%] m-2 w-6 h-5'></div></div></div> : ''}





      </div>
    </div>

      {/* djkldj */}
      <div>
    <div className={(props.filter) ? 'fixed left-[50%] top-[40%] w-[94%] p-3 py-3 md:w-[24%] md: md:top-[15%] md:left-[75.5%] translate-x-[-50%] md:translate-x-[0%] md:translate-y-[0%] translate-y-[-50%] bg-white border-t-4 shadow-2xl rounded-md ease-in-out duration-700 border-[rgba(69.7%,10%,60.7%,1)]':'fixed left-[150%] top-[-50%] w-[94%] p-3 py-3 md:w-[24%] md: md:top-[15%] md:left-[75.5%] translate-x-[-50%] md:translate-x-[0%] md:translate-y-[0%] translate-y-[-50%] bg-white border-t-4 shadow-2xl rounded-md ease-in-out duration-700 border-[rgba(69.7%,10%,60.7%,1)]'}>
        <br></br>
        <label className='m-1 font-bold'>Sort</label><select id='sort' onChange={sortup} value={sort} className='border-2 mb-3 md:mb-4 border-black rounded-md'>
            <option value='r'>Random</option>
            <option value='lth'>Low to High</option>
            <option value='htl'>High to Low</option>
        </select><br></br>
        <label className='m-1 font-bold'>Experience Type</label><select id='exp' onChange={exptup} value={exp} className='border-2 border-black mb-3 md:mb-4  rounded-md'>
            <option value='a'>All</option>
            <option value='f'>Fresher</option>
            <option value='e'>Experience</option>
            <option value='se'>Same Field Experience</option>
            <option value='1'>1 Years</option>
            <option value='2'>2 Years</option>
            <option value='3'>3 Years</option>
            <option value='4'>4 Years</option>
            <option value='5'>5 Years</option>
            <option value='6'>6 Years</option>
            <option value='7'>7 Years</option>
            <option value='8'>8 Years</option>
            <option value='9'>9 Years</option>
            <option value='10'>10 Years</option>
            <option value='11'>10+ Years</option>
        </select>
        <br></br>
        <label className='m-1 font-bold'>Salary</label><select id='sal' onChange={salup} value={salary} className='border-2 border-black mb-3 md:mb-4  rounded-md'>
            <option value='0-100'>All</option>
            <option value='0-3'>0 LPA - 3 LPA</option>
            <option value='3-5'>3 LPA - 5 LPA</option>
            <option value='5-7'>5 LPA - 7 LPA</option>
            <option value='7-10'>7 LPA - 10 LPA</option>
            <option value='10-15'>10 LPA - 15 LPA</option>
            <option value='15-20'>15 LPA - 20 LPA</option>
            <option value='20-30'>20 LPA - 30 LPA</option>
            <option value='30-50'>30 LPA - 50 LPA</option>
            <option value='50-100'>50 LPA and Above</option>
        </select><br></br>
        <label className='m-1 font-bold'>Work Mode</label><select id='work' onChange={workup} value={work_mode} className='border-2 border-black mb-3 md:mb-4  rounded-md'>
            <option value='a'>All</option>
            <option value='Work From Home'>Work From Home</option>
            <option value='Work From Ofiice'>Work From Ofiice</option>
            <option value='Both'>Both</option>
        </select>
        {/* <label className='m-1 font-bold'>Salary Type</label><select id='work' onChange={salup} value={localStorage.getItem('sal_type')} className='border-2 border-black mb-3 md:mb-4  rounded-md'>
            <option value='y'>Year</option>
            <option value='m'>Month</option>
        </select><br></br><br></br> */}
        <div className='flex justify-end'>
        <button onClick={handlefilt} className='md:hidden border-2 mx-3 px-1 rounded-md hover:bg-red-600 hover:text-white border-[rgba(69.7%,10%,60.7%,1)]'>Close</button><br></br>
        {/* <button onClick={handlemainfilter} className='border-2 mx-3 p-1 px-2 border-[rgba(69.7%,10%,60.7%,1)] rounded-md text-white hover:bg-[rgba(69.7%,10%,60.7%,1)] hover:scale-105 hover:border-black bg-[rgba(69.7%,10%,60.7%,1)]'>Filter</button> */}
        </div>
    </div>
    </div>
      </div>
  )
}

export default ResCards
