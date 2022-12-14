import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-middle'>
                <div className='footer-title'>
                    <img className='footer-title-image' src='images/logo.png' alt='logo' />
                </div>
                <div className='footer-content'>
                    <div className='footer-col'>
                        <p className='col-title'>Welcome</p>
                        <a target={'_blank'} rel='noreferrer' href='https://www.techsyndicate.us/team' className='col-object'>The Team</a>
                    </div>
                    <div className='footer-col'>
                        <p className='col-title'>Automobile Models</p>
                        <Link to='model/1' className='col-object'>Saluja 356</Link>
                        <Link to='model/2' className='col-object'>Dev Bhaiya</Link>
                        <Link to='model/3' className='col-object'>Ncrypt</Link>
                    </div>
                    <div className='footer-col'>
                        <p className='col-title'>The workshop</p>
                        <Link to='models' className='col-object'>Check Prebuild</Link>
                        <Link to='workshop' className='col-object'>Customise</Link>
                    </div>
                </div>
                <div className='footer-socials'>
                    <a href='/'><img src='images/footersocials/bi_meta.png' alt='okk' /></a>
                    <a href='/'><img src='images/footersocials/mdi_instagram.png' alt='okk' /></a>
                    <a href='/'><img src='images/footersocials/mdi_twitter.png' alt='okk' /></a>
                    <a href='/'><img src='images/footersocials/NEWSLETTER.png' alt='okk' /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;