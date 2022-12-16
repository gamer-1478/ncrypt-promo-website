import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Notyf } from 'notyf';
import {getUrl} from '../../utitilies/Validation';
import './Testdrive.css';

function Testdrive() {
    const navigate = useNavigate();
    const notyf = new Notyf();

    async function testdrive() {
        const cars = document.getElementById('cars').value;
        const date = document.getElementById('date').value;

        const res = await fetch(getUrl() + '/auth/testd', {
            method: 'POST',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cars, date
            })
        })
        const element = await res.json()

        if (element.success == true) {
            notyf.success(element.msg)
            window.location.href = ('/profile')
        } else {
            notyf.error(element.msg)
            //after 2 seconds take to login
            setTimeout(() => {
                navigate('/login')
            }, 2000);
        }

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
                <h1 className='reg-title'>Request a test drive</h1>
                <label> Car
                    <select id="cars" name="cars" size="3">
                        <option value="1">ASCAR Evolution</option>
                        <option value="2">Random Car 1</option>
                        <option value="3">Random Car 2</option>
                    </select>
                </label>

                <label> Date
                    <input type='date' id='date' className='reg-input' />
                </label>

                <button className='reg-button' onClick={testdrive}>
                    Submit
                </button>
                <p className='already'>Don't have a account? <Link to='/reg'>Register Here!</Link></p>
            </div>
        </div>
    )
}


export default Testdrive