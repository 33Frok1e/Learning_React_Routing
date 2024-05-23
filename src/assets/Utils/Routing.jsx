import React from 'react'
import { Route, Routes } from 'react-router-dom'
import User from '../Components/User'
import Home from '../Components/Home'
import About from '../Components/About'
import UserDetails from '../Components/UserDetails'

function Routing() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/User" element={<User />}> 
              <Route path="/User/:name" element={<UserDetails />} />
            </Route> 
            <Route path="/About" element={<About />} />
        </Routes>
    </>
  )
}

export default Routing