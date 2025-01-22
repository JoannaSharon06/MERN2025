import { useState } from 'react'
import About from "./assets/components/classComponents/Functional Components/About"
import Home from "./assets/components/classComponents/Functional Components/Home"
import ClassComponents from "./assets/components/classComponents/ClassCompEg"
import Gallery from "./assets/components/classComponents/Functional Components/gallery"
import Contact from "./assets/components/classComponents/Functional Components/contact"
import Navbar from "./assets/components/classComponents/Functional Components/Navbar"
import Signup from "./assets/components/classComponents/Functional Components/Signup"
import Login from "./assets/components/classComponents/Functional Components/Login"
import UseState from "./assets/components/classComponents/Functional Components/Hooks/UseState"
import UseEffect from "./assets/components/classComponents/Functional Components/Hooks/UseEffect"

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css'

function App() {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(true); 
  };

  const handleLogout = () => {
    setLogin(false);
  };


 
  return (
    
    
    <BrowserRouter>
      {login && <Navbar onLogout = {handleLogout}/>}
      <Routes>
        {!login ? (
          <>
            <Route path="/" element={<Signup onLogin={handleLogin} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery image="chocolate" page="gallery" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/usestate" element={<UseState />} />
            <Route path="/useeffect" element={<UseEffect />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
