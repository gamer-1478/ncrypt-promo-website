import React, { useEffect, useState } from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom';
import { getUrl, normliseCarName } from '../../utitilies/Validation';

function Profile() {
    const navigate = useNavigate();

    const [user, SetUser] = useState({});

    useEffect(() => {
        fetch(getUrl() + '/auth/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json()).then(data => {
            if (data.error) {
                navigate('/login');
            } else {
                SetUser(data);
            }
        })
    }, [])

    return (
        <div className='workshop-master-container'>
            <div className='work-nav'>
                <div className='work-nav-left'>
                    <img onClick={() => { navigate('/menu') }} className='work-nav-bars' src='/images/custom/bar.png' alt='bars' />
                    <img className='work-nav-logo' src='/images/logo.png' alt='logo' />
                </div>
                <p className='work-nav-indicator'>Your Profile</p>
            </div>
            <div className='user-details'>
                <p><span style={{ color: '#f4f4f4' }}>Name:</span> {user.email}</p>
                <p><span style={{ color: '#f4f4f4' }}>Email:</span> {user.name}</p>
            </div>
            <div className='profile-container'>
                <h1 className='profile-container-title'>Your Upcoming Test Drives</h1>
                {user.hasOwnProperty('drives') && user.drives.length == 0 && <p className='profile-container-desc'>You have no upcoming test drives</p>}
                {user.hasOwnProperty('drives') &&user.drives.length != 0 && user.drives.map((drive, index) => {
                    return (
                        <div className='workshop-card'>
                            <h1 className='workshop-card-title'>{index +1 + ' '+ normliseCarName(drive.cars)}</h1>
                            <p className='workshop-card-desc'>ON: {drive.date}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default Profile