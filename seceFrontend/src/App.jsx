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
import UseEffectAPI from "./assets/components/classComponents/Functional Components/Hooks/UseEffectAPI"
import UseReducer from "./assets/components/classComponents/Functional Components/Hooks/UseReducer"
import UseEffectAPIImage from "./assets/components/classComponents/Functional Components/Hooks/UseEffectAPIImage"
import UseRef from "./assets/components/classComponents/Functional Components/Hooks/UseRef"
import UseMemo from "./assets/components/classComponents/Functional Components/Hooks/UseMemo"
import UseCallback from "./assets/components/classComponents/Functional Components/Hooks/UseCallback"
import UseContext from "./assets/components/classComponents/Functional Components/Hooks/UseContext"
import Memo from "./assets/components/classComponents/Functional Components/Memoization/Memo"

import ReactLifeCycleMethods from "./assets/components/classComponents/ReactLifeCycleMethods"
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
            <Route path="/useapi" element={<UseEffectAPI />} />
            <Route path="/usereducer" element={<UseReducer />} />
            <Route path="/useeffectimg" element={<UseEffectAPIImage />} />
            <Route path="/useref" element={<UseRef />} />
            <Route path="/usememo" element={<UseMemo />} />
            <Route path="/usecallback" element={<UseCallback />} />
            <Route path="/usecontext" element={<UseContext />} />
            <Route path="/reactlm" element={<ReactLifeCycleMethods />} />
            <Route path="/memo" element={<Memo />} />


          </>
        )}
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
