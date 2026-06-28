import React,{useState} from 'react';
import './Login.css';
function Login()
{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [notification,setNotification]=useState(false);
    const handleSubmit=()=>{
        if(email.length>0 && password.length>0)
        {
           setNotification(true);
            setTimeout(()=>{
            setNotification(false);
        },2000);
        setEmail("");
        setPassword("");
        }
       
    }
    return(
      <div className="login1">
        <h1>Login page</h1>

        <div className="login">
            <label>Email : </label>

            <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label>PassWord</label>
            <input type="password" placeholder="Enter PassWord" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <br></br>
            <button type="submit" onClick={handleSubmit}>LOGIN</button>
            
        </div>
        <br></br>
        <div className="forgot">
                <a href="">forgot password</a>
                <div>
                <input type="checkbox"></input>
                <label>remember me</label>
                </div>
            </div>
            {notification && 
                <div className="noti">
                  <p>Successfully login</p>
                </div>

            }
      </div>
    )
}
export default Login;