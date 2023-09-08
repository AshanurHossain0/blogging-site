import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='fullname' />
        <input required type="text" placeholder='email' />
        <input required type="password" placeholder='password' />
        <input required type="password" placeholder='confirm password' />
        <input required type="text" placeholder='city name' />
        <button type='submit'>Register</button>
        <Link to='/login' className='link'>Already have an account? <span>Login</span></Link>
      </form>
    </div>
  )
}

export default Register