import React, { useState,useEffect } from 'react'

const useLocalStorage = (key,value) => {
    var[text,setText]=useState(()=>{
    const jsonValue=localStorage.getItem(key)
    if (!jsonValue) return JSON.parse(jsonValue)
    });
    useEffect(()=>{localStorage.setItem(key,JSON.stringify(text))},[key,text])
    return [text,setText]
    
  }
  
  export default useLocalStorage