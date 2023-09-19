import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

const Register = () => {

  const navigate=useNavigate();
  const [inputs, setInputs] = useState({ email: "", username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const  {data } = await axios.post(`${process.env.REACT_APP_PORT}/auth/register`, inputs);
      setInputs({email: "", username: "", password: "" });
      navigate("/login")
    }
    catch (err:any) {
      window.alert(err.response.data);
      console.log(err);
    }
  }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input name='username' value={inputs.username} required type="text" placeholder='username' onChange={(e) => handleChange(e)} />
        <input name='email' value={inputs.email} required type="text" placeholder='email' onChange={(e) => handleChange(e)} />
        <input name='password' value={inputs.password} required type="password" placeholder='password' onChange={(e) => handleChange(e)} />
        {/* <input required type="password" placeholder='confirm password' /> */}
        {/* <input required type="text" placeholder='city name' /> */}
        <button type='submit'>Register</button>
        <Link to='/login' className='link'>Already have an account? <span>Login</span></Link>
      </form>
      <div className="circle c1"></div>
      <div className="circle c2"></div>
    </div>
  )
}

export default Register