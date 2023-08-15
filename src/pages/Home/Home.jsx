import React from 'react'


import { Route, Routes } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'
import Seniority from '../../components/Seniority/Seniority'

function Home() {
  return (
    <React.Fragment>
        <Navbar/>
        <Routes>
          <Route path={"/"}element={<Hero/>}></Route>
          <Route path={"/technologies"}element={<About/>}></Route>
          <Route path={"/aboutme"}element={<Seniority/>}></Route>
          
        </Routes>
        <Footer/>
    </React.Fragment>
  )
}

export default Home