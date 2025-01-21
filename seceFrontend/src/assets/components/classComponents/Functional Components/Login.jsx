import { useNavigate,Link } from "react-router-dom"
const Login=(p)=>{
    const navigate = useNavigate();
    const handleLogin = (e) =>{
        e.preventDefault()
        p.onLogin();
        navigate("/");
      }

    return(
        <div>
            <form onSubmit={handleLogin}>
            <input type='text' id='text' placeholder='Enter your Email Address' /><br/>
            <input type='password' id='text' placeholder='Enter your Password' /><br/>
            <input type='submit'></input>
            </form>
        </div>
    )
}

export default Login