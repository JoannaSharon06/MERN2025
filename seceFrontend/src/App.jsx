import { useState } from 'react'
import About from "./assets/components/classComponents/Functional Components/About"
import Home from "./assets/components/classComponents/Functional Components/Home"
import ClassComponents from "./assets/components/classComponents/ClassCompEg"
import Gallery from "./assets/components/classComponents/Functional Components/gallery"
import Contact from "./assets/components/classComponents/Functional Components/contact"

import './App.css'

function App() {
  return (
    <>
    <div>
      <About/>
      <Home/> 
      <ClassComponents/>
      <h2>Without props</h2>
      <Gallery/>
      <h2>With props</h2>
      <Gallery image="Sece Logo" page="Gallery Page" />
      <Contact/>
    </div>
     
    </>
  )
}

export default App
