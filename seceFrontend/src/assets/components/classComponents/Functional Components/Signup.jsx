import "../../../../css/signup.css";
import {useNavigate, Link} from "react-router-dom";
const Signup=(p)=>{
    const navigate = useNavigate();
    const handleSignup = (e) =>{
      e.preventDefault();
      p.onLogin();
      navigate("/");
    }
  
    return(
        <div>
            <form onSubmit={handleSignup}>
            <h1>Welcome to Signup Page</h1>
            <input type='text' id='text' placeholder='Enter your First Name' /><br/>
            <input type='text' id='text' placeholder='Enter your Last Name' /><br/>
            <input type='text' id='text' placeholder='Enter your Email Address' /><br/>
            <input type='text' id='text'  placeholder='Confirm your Email Address' /><br/>
            <input type='submit'></input>
            </form>
        </div>
    )
}

export default Signup