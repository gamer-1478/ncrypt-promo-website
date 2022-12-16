import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './Landing.css'

function Landing() {
  return (
    <div className='landing-main-container'>
      <div className='menu-fixed-container'>
        <Link to={'menu'}> <img className='menu-fixed' src='images/menu.png' alt='menu' /> </Link>
      </div>
      <div className='landing-page1'>
        <img className='landing-pg1-title' alt='ascar' src='images/logo.png' />
        <h1 className='landing-pg1-subtitle'>Your Next Drive</h1>
      </div>
      <div className='landing-page2'>
        <div className='page2-leftcontent'>
          <img className='page2-leftimage' alt='Page 2 left side' src='images/page2left.png' />
        </div>
        <div className='page2-rightcontent'>
          <img className='page2-rightimage' alt='Page 2 right side' src='images/page2right.png' />
        </div>
      </div>
      <div className='transition-image'>
        <img className='transition-image' src='images/transition.png' alt='transition' />
      </div>
      <div className='landing-page3'>
        <img className='heading-page3' src='images/page3head.png' alt='page3head' />
        <img className='page3-model' src='images/page3model.png' alt='page3' />
        <a href='workshop'><img className='explore' src='images/explore.png' alt='explore' /></a>
      </div>
      <Footer />
    </div>
  )
}

export default Landing