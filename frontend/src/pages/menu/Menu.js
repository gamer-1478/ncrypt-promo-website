import React, { useEffect } from 'react'
import './Menu.css';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();

  function hovering(id) {
    Array.from(document.getElementsByClassName('menu-span')).forEach(element => {
      element.style.opacity = '0%';
    });
    document.getElementById(id + '-num').style.opacity = '100%';
    document.getElementById('menu-img').src = 'images/menu/menu-' + id + '.png';
  }

  useEffect(() => {
    hovering('welc');
  }, [])

  function closeMenu() {
    console.log('close menu');
    navigate(-1);
  }

  function redirecttopage(id) {
    navigate(id);
  }

  return (
    <div className='menu-container'>
      <div className='menu-left'>
        <div className='menu-col' onClick={() => closeMenu()}>
          <i style={{ color: 'white' }} className='fa fa-3x fa-times' aria-hidden="true"></i>
        </div>
        <div id='welc' onMouseOver={() => hovering('welc')} className='menu-col'>
          <p onClick={() => redirecttopage('/')}><span className='menu-span' id='welc-num'>01</span>Welcome</p>
        </div>
        <div id='model' onMouseOver={() => hovering('model')} className='menu-col'>
          <p onClick={() => redirecttopage('/models')}><span className='menu-span' id='model-num'>02</span>Model</p>
        </div>
        <div id='workshop' onMouseOver={() => hovering('workshop')} className='menu-col'>
          <p onClick={() => redirecttopage('/workshop')}><span className='menu-span' id='workshop-num'>03</span>The Workshop</p>
        </div>
        <div id='test' onMouseOver={() => hovering('test')} className='menu-col'>
          <p onClick={() => redirecttopage('/testdrive')}><span className='menu-span' id='test-num'>04</span>Test Drive</p>
        </div>
      </div>
      <div className='menu-right'>
        <div className='menu-right-container'>
          <p className='moving-text'>REACH THE UNREACHABLE</p>
          <img id='menu-img' src='images/menu/menu-welc.png' alt='other shit'></img>
          <p className='moving-text text-2'>REACH THE UNREACHABLE</p>
        </div>
      </div>
    </div>
  )
}

export default Menu