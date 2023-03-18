import React, { createContext, useState } from 'react'

  const SearchC = createContext()
export default SearchC

export const SearchProvider = ({children}) => {
    
    const [key,setKey] = useState(null)
    const [work_mode,setwork_mode] = useState('a')
    const [exp,setexp] = useState('a')
    const [salary,setsalary] = useState('0-7000000')
    const [sort,setsort] = useState('r')



    function change(key=null,work_mode='a',exp='a',salary='0-7000000',sort='r'){
      // setKey(key)
      // setwork_mode(work_mode)
      // setexp(exp)
      // setsalary(salary)
      // setsort(sort)
      // // alert(salary)
    }
    return (
        <SearchC.Provider value={{key,work_mode,exp,salary,sort,change}}>
            {children}
        </SearchC.Provider>
  )
}

