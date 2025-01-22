import { useState,useEffect } from "react";

const UseEffect=()=>{
    var[text,setText]=useState("");
    useEffect(()=>{
        console.log(text);
    },[text])
    return(
        <div>
            <h1>This is UseEffect Example</h1>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h4>The text is {text}</h4>
        </div>
    )
}

export default UseEffect;