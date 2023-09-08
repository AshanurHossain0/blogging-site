import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='email' />
        <input required type="password" placeholder='password'/>
        <button type='submit'>Login</button>
        <Link to='/register' className='link'>Don't have account? <span>Register first</span></Link>
      </form>
    </div>
  )
}

export default Login