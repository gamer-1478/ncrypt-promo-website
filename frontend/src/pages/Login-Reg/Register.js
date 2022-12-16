import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { Notyf } from 'notyf';
import {getUrl} from '../../utitilies/Validation';

function Register() {
    const navigate = useNavigate();
    const notyf = new Notyf();
    async function register() {
        const name = document.getElementById('full-name').value
        const email = document.getElementById('email').value
        const pass = document.getElementById('pass').value
        const confPass = document.getElementById('conf-pass').value

        if (pass !== confPass) {
            notyf.error('Passwords do not match')
            return
        }
        if (pass.length < 8) {
            notyf.error('Password must be atleast 8 characters')
            return
        }
        if (name.length < 3) {
            notyf.error('Name must be atleast 3 characters')
            return
        }
        if (email.length < 3) {
            notyf.error('Email must be atleast 3 characters')
            return
        }
        //validate email
        if (!email.includes('@') && !email.includes('.')) {
            notyf.error('Email is invalid')
            return
        }

        const res = await fetch(getUrl() + '/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: pass
            })
        })
        const data = await res.json()
        data.forEach(element => {
            if (element.success == true){
                //set cookie
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
                <h1 className='reg-title'>Create Account</h1>
                <label> Full Name
                    <input type='text' id='full-name' className='reg-input' />
                </label>

                <label> Email
                    <input type='text' id='email' className='reg-input' />
                </label>

                <label> Password
                    <input type='password' id='pass' className='reg-input' />
                </label>

                <label> Confirm Password
                    <input type='password' id='conf-pass' className='reg-input' />
                </label>

                <button className='reg-button' onClick={register}>
                    Create Account
                </button>
                <p className='already'>Already have a account? <Link to='/login'>Login Here!</Link></p>
            </div>
        </div>
    )
}

export default Register