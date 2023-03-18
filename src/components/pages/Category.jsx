
const Category = (props) => {




  const handlemainfilter = () =>{
   const n_sort = document.getElementById('sort').value
   const n_salary = document.getElementById('sal').value
   const n_work_mode = document.getElementById('work').value
   const n_exp = document.getElementById('exp').value
    
  }

  const handlefilt=()=>{
    props.change(!props.filter)
  }



  return (
    <div>
    <div className={(props.filter) ? 'fixed left-[50%] top-[40%] w-[94%] p-3 py-3 md:w-[24%] md: md:top-[15%] md:left-[75.5%] translate-x-[-50%] md:translate-x-[0%] md:translate-y-[0%] translate-y-[-50%] bg-white border-t-4 shadow-2xl rounded-md ease-in-out duration-700 border-[rgba(69.7%,10%,60.7%,1)]':'fixed left-[150%] top-[-50%] w-[94%] p-3 py-3 md:w-[24%] md: md:top-[15%] md:left-[75.5%] translate-x-[-50%] md:translate-x-[0%] md:translate-y-[0%] translate-y-[-50%] bg-white border-t-4 shadow-2xl rounded-md ease-in-out duration-700 border-[rgba(69.7%,10%,60.7%,1)]'}>
        <br></br>
        <label className='m-1 font-bold'>Sort</label><select id='sort' value={localStorage.getItem('sort')} className='border-2 mb-3 md:mb-4 border-black rounded-md'>
            <option value='r'>Random</option>
            <option value='lth'>Low to High</option>
            <option value='htl'>High to Low</option>
        </select><br></br>
        <label className='m-1 font-bold'>Experience Type</label><select id='exp' className='border-2 border-black mb-3 md:mb-4  rounded-md'>
            <option value='a'>All</option>
            <option value='f'>Fresher</option>
            <option value='e'>Experience</option>
            <option value='se'>Same Field Experience</option>
        </select>
        <br></br>
        <label className='m-1 font-bold'>Salary</label><select id='sal' className='border-2 border-black mb-3 md:mb-4  rounded-md'>
            <option value='0-7000000'>All</option>
            <option value='0-10000'>0 - 10,000</option>
            <option value='10000-30000'>10,000 - 30,000</option>
            <option value='30000-50000'>30,000 - 50,000</option>
            <option value='50000-75000'>50,000 - 75,000</option>
            <option value='75000-100000'>75,000 - 1,00,000</option>
            <option value='100000-200000'>1,00,000 - 2,00,000</option>
            <option value='200000-500000'>2,00,000 - 5,00,000</option>
            <option value='500000-7000000'>5,00,000 and Above</option>
        </select><br></br>
        <label className='m-1 font-bold'>Work Mode</label><select id='work' className='border-2 border-black mb-3 md:mb-4  rounded-md'>
            <option value='a'>All</option>
            <option value='Work From Home'>Work From Home</option>
            <option value='Work From Ofiice'>Work From Ofiice</option>
            <option value='Both'>Both</option>
        </select><br></br><br></br>
        <div className='flex justify-end'>
        <button onClick={handlefilt} className='border-2 mx-3 px-1 rounded-md hover:bg-red-600 hover:text-white border-[rgba(69.7%,10%,60.7%,1)]'>Cancel</button><br></br>
        <button onClick={handlemainfilter} className='border-2 mx-3 p-1 px-2 border-[rgba(69.7%,10%,60.7%,1)] rounded-md text-white hover:bg-[rgba(69.7%,10%,60.7%,1)] hover:scale-105 hover:border-black bg-[rgba(69.7%,10%,60.7%,1)]'>Filter</button>
        </div>
    </div>
    </div>
  )
}

export default Category