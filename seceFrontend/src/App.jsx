import { useState } from 'react'
import About from "./assets/components/classComponents/Functional Components/About"
import Home from "./assets/components/classComponents/Functional Components/Home"
import ClassComponents from "./assets/components/classComponents/ClassCompEg"
import Gallery from "./assets/components/classComponents/Functional Components/gallery"

import './App.css'

function App() {
  return (
    <>
    <div>
      <About/>
      <Home/>
      <ClassComponents/>
      <Gallery/>
    </div>
     
    </>
  )
}

export default App
