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
import UseLocalStorage from "./assets/components/classComponents/Functional Components/Hooks/UseLocalStorage"
import Memo from "./assets/components/classComponents/Functional Components/Memoization/Memo"
import Lazy from "./assets/components/classComponents/Functional Components/Memoization/LazyLoadingWithSuspense"
import UpdateNumber from "./assets/components/classComponents/Functional Components/Memoization/UpdateNumber"
import UpdateText from "./assets/components/classComponents/Functional Components/Memoization/UpdateText"
import ReactLifeCycleMethods from "./assets/components/classComponents/ReactLifeCycleMethods"
import HoC from "./assets/components/classComponents/Functional Components/HoC/HoC"
import Toggle from "./assets/components/classComponents/Functional Components/Hooks/CustomHooks/Toggle"

import {BrowserRouter,Routes,Route} from 'react-router-dom'


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
            <Route path="/uselocal" element={<UseLocalStorage />} />
            <Route path="/reactlm" element={<ReactLifeCycleMethods />} />
            <Route path="/memo" element={<Memo />} />
            <Route path="/lazy" element={<Lazy />} />
            <Route path="/updatenumber" element={<UpdateNumber />} />
            <Route path="/updatenumber" element={<UpdateText />} />
            <Route path="/hoc" element={<HoC />} />
            <Route path="/toggle" element={<Toggle />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
