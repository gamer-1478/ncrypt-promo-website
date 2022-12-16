import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Custom.css'

function Customise() {
    const navigate = useNavigate();

    return (
        <div className='workshop-master-container'>
            <div className='work-nav'>
                <div className='work-nav-left'>
                    <img onClick={()=>{navigate('/menu')}} className='work-nav-bars' src='/images/custom/bar.png' alt='bars' />
                    <img className='work-nav-logo' src='/images/logo.png' alt='logo' />
                </div>
                <p className='work-nav-indicator'>The Workshop</p>
            </div>
            <div className='workshop-container'>
                <div className='horizontal-scroll'>
                    <div className='workshop-card' onClick={()=>{navigate('/customdemo')}}>
                        <h1 className='workshop-card-title'>ASCAR </h1>
                        <p className='workshop-card-desc'>A random useless kid, job less and really needs
                            a life. Please check out his behance</p>
                        <img className='workshop-card-image' src='/images/custom/car1.png' alt='card' />
                    </div>
                    <div className='workshop-card' onClick={()=>{navigate('/customdemo')}}>
                        <h1 className='workshop-card-title'>Random Car 1</h1>
                        <p className='workshop-card-desc'>A random useless kid, job less and really needs
                            a life. Please check out his behance</p>
                        <img className='workshop-card-image' src='/images/custom/car2.png' alt='card' />
                    </div>
                    <div className='workshop-card' onClick={() => { navigate('/customdemo') }} style={{marginRight: '40px'}}>
                        <h1 className='workshop-card-title'>Random Car 2</h1>
                        <p className='workshop-card-desc'>This is a really great car on our fake lineup.</p>
                        <img className='workshop-card-image' src='/images/custom/car3.png' alt='card' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customise