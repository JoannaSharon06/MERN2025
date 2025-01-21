
const gallery=(props)=>
{
   return(
   <div>
        <h5>Welcome to {props.page}</h5>
        <img src="logo.jpeg" alt="SECE logo"/>
        <h5>The image is {props.image}</h5>
        
    </div>
    
   ) 
}

export default gallery