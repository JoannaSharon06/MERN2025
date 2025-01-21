import { useState } from "react";

//Event Handling
const About=()=>{
    var[text,setText]=useState("SECE")
    function handleText(event){
        setText(event.target.value)
    }
    return(
        <div>
            <h4>This is a about component</h4>
            <h4>TextArea:</h4>
            <textarea value={text} onChange={handleText}/>
            <p>The text is {text}</p>

        </div>
    )
}

export default About;