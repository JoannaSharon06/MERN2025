import { useState } from "react";
const contact=()=>{
   // var array=[10,20];
    //var [a,b]= array; //destructuring operator
    var [num,setNum]=useState(0);
    return(
        <div>
            <h4>This is a contact component</h4>
            <h4>This is a state example</h4>
            <h4>Number is {num}</h4>
            <button onClick={()=>setNum(num+1)}>+</button>
        </div>
    )
}

export default contact;