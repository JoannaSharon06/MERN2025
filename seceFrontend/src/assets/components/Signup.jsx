import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
    const [firstname,setFirstName] = useState("")
    const [lastname,setLastName] = useState("")
    const [username,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();

    const handleSignUp =async (event) =>{
      event.preventDefault();
      try{
        console.log("event triggered");
        const req = await axios.post("http://localhost:3001/signup",{
          firstname:firstname,
          lastname:lastname,
          username:username,
          email:email,
          password:password
        })
        console.log(req)
        alert(req.data.response)
        if(req.data.signupStatus){
          navigate("/login")}
          else{
            navigate("/signup")
          }
      }
        catch(err){
          console.log(err);
        }
    }
  return (
    <div>
        <form method = "POST"  onSubmit={handleSignUp}>
            FirstName : <input type="text" value={firstname} onChange={(e)=>{setFirstName(e.target.value)}} required/><br/>
            LastName : <input type="text" value={lastname} onChange={(e)=>{setLastName(e.target.value)}} required/><br/>
            UserName : <input type="text" value={username} onChange={(e)=>{setUserName(e.target.value)}} required/><br/>
            Email : <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/><br/>
            Password : <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/><br/>
            <button type="submit">Signup</button>
        </form>
        <p>already have account??<a href="/login">Login</a></p>
      
    </div>
  )
}

export default Signup