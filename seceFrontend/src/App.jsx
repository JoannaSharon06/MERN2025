import { useState } from 'react'
import About from "./assets/components/classComponents/Functional Components/About"
import Home from "./assets/components/classComponents/Functional Components/Home"
import ClassComponents from "./assets/components/classComponents/ClassCompEg"
import Gallery from "./assets/components/classComponents/Functional Components/gallery"
import Contact from "./assets/components/classComponents/Functional Components/contact"
import Navbar from "./assets/components/classComponents/Functional Components/Navbar"
import Signup from "./assets/components/classComponents/Functional Components/Signup"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css'

function App() {
  return (
    
    
    <BrowserRouter>
    <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery image="Sece Logo" page="Gallery Page" />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
