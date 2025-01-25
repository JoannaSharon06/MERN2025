import React, { useState } from 'react'
import useLocalStorage from './CustomHooks/SampleCustomHook'

const UseLocalStorage = () => {
    var[text,setText]=useLocalStorage("userName",text)
    var[pass,setPass]=useLocalStorage("password",pass)
  return (
    <div>
      <h2>Utilising custom hook created</h2>
      Email<input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      <br/>
      Password<input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} />
      <h3>The text typed is {text}</h3>
    </div>
  )
}

export default UseLocalStorage