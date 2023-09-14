import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <h2>Welcome Again</h2>
        <input required type="text" placeholder='email' />
        <input required type="password" placeholder='password'/>
        <button type='submit'>Login</button>
        <Link to='/register' className='link'>Don't have account? <span>Register first</span></Link>
      </form>
      <div className="circle c1"></div>
      <div className="circle c2"></div>
    </div>
  )
}

export default Login