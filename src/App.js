import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/pages/Header'
import Home from './components/pages/Home'
import ResDetail from './components/pages/ResDetail'
import Result from './components/pages/result'
import SingUp from './components/pages/sign/SingInUp'
import { SearchProvider } from './components/pages/context/SearchContext'
import Dummy from './components/pages/Dummy'

const App = () => {
  
  const login = true

  const userRoutes = <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/search/:key' element={<Dummy/>} />
        <Route exact path='/search_/:key' element={<Result/>} />
        <Route path='*' element={<Home/>} />
        {/* <Route exact path='/product_detail_id_65556521432434:id' element={<ResDetail/>} /> */}
  </Routes>
  
  const anonymousRoutes = <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/signup' element={<SingUp/>} />
        <Route exact path='/search_/:key' element={<Result/>} />
        <Route exact path='/product_detail_/:id' element={<ResDetail/>} />
  </Routes>
  
  return (
    // <div><ResDetail/></div>
    // <div><Result/></div>
    // <div><Home/></div>
    <BrowserRouter>
    <SearchProvider>
    {userRoutes}
    </SearchProvider>
    </BrowserRouter>

  )
}



export default App

