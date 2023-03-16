import React,{useState} from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [cpass,setCPass]=useState('');
    const [name,setName]=useState('');
    const [success,setSuccess]=useState('');
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
        if(pass.target.value===cpass.target.value){
          setSuccess(true);
          alert("Your Account is Created. Now Please Login:");
        } else {
          alert("Password and Confirm Password are not same");
        }
    }
  return (
    <div className="auth-form-container">
    <h2>Register</h2>
    <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="name" id="name" placeholder="full name" />
        <label htmlFor="email">E-mail</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="password" id="password" name="password"/>
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input value={cpass} onChange={(e)=>setCPass(e.target.value)} type="password" placeholder="password" id="confirmpassword" name="confirmpassword"/>
        <button className="login-btn" onClick={()=>navigate('/login')} type="submit">Sign Up</button>
    </form>
    <button className="link-btn" onClick={()=>navigate(-1)}>Already have an account.<br/> Login</button>
</div>
  )
}

export default Register;