import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { UserState } from '../context/authContext';

const Login = () => {

  const {login} =UserState();

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      
      await login(inputs);
      navigate("/")
    }
    catch (err: any) {
      window.alert(err.response.data);
      console.log(err);
    }
  }
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <h2>Welcome Again</h2>
        <input name='username' required type="text" placeholder='username or email' onChange={(e) => handleChange(e)} />
        <input name='password' required type="password" placeholder='password' onChange={(e) => handleChange(e)} />
        <button type='submit'>Login</button>
        <Link to='/register' className='link'>Don't have account? <span>Register first</span></Link>
      </form>
      <div className="circle c1"></div>
      <div className="circle c2"></div>
    </div>
  )
}

export default Login