import React,{useState,useRef} from "react";
import './style.css'
import { Link,Outlet } from "react-router-dom";
import Logger from "./Logger";

const Login = () => {
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [success, setSuccess]=useState('')
    const emailRef=useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email, pass);
        setEmail('');
        setPass('');
        setSuccess(true);
    }
  return (
    <>
    {success ? (
        <section>
            <Logger/>
        </section>
    ) :
    (<section className="auth-form-container">
        <h1>Login</h1>
        <nav>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                type="email" 
                autoComplete="off"
                placeholder="youremail@gmail.com" 
                id="email" 
                name="email"
                ref={emailRef}
                required
                />
            <label htmlFor="password">Password</label>
            <input 
                value={pass} 
                onChange={(e)=>setPass(e.target.value)} 
                type="password" 
                placeholder="****" 
                id="password" 
                name="password"
                required
                />
                <button className="login-btn" type="submit">Log In</button>
        </form>
        <Link to='/register'>
            <button className="link-btn">New User? Create Account</button>
        </Link>
        </nav>
        <Outlet />
    </section> 
       ) }
    </>
  )
}

export default Login;