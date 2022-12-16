import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { Notyf } from 'notyf';
import getUrl from '../../utitilies/Validation';

function Login() {
  const navigate = useNavigate();
  const notyf = new Notyf();

  async function login() {
    const email = document.getElementById('email').value
    const pass = document.getElementById('pass').value
    const res = await fetch(getUrl() + '/auth/login', {
      method: 'POST',
      withCredentials: true,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: pass
      })
    })
    const data = await res.json()
    data.forEach(element => {
      if (element.success == true) {
        notyf.success(element.msg)
        navigate('/profile')
      } else {
        notyf.error(element.msg)
      }
    });

  }
  return (
    <div className='Register-master'>
      <div className='reg-nav'>
        <div className='reg-nav-left'>
          <img onClick={() => { navigate('/menu') }} className='reg-nav-bars' src='/images/custom/bar.png' alt='bars' />
          <img className='reg-nav-logo' src='/images/logo.png' alt='logo' />
        </div>
      </div>


      <div className='Reg-container'>
        <h1 className='reg-title'>Login</h1>
        <label> Email
          <input type='text' id='email' className='reg-input' />
        </label>

        <label> Password
          <input type='password' id='pass' className='reg-input' />
        </label>

        <button className='reg-button' onClick={login}>
          Login
        </button>
        <p className='already'>Don't have a account? <Link to='/reg'>Register Here!</Link></p>
      </div>
    </div>
  )
}

export default Login