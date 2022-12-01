import React from 'react'
import logo from '../../images/logo2.jpg'
import data from './data'
import {IoIosColorPalette} from 'react-icons/io'
import './navbar.css'
function Navbar() {
  return (
    <nav>
      <div className='container nav__container'>
        <a href='/' className='nav__logo'>
          <img src={logo} alt="logo"/>
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>
            )
          }
        </ul>
        <button id='theme__icon'><IoIosColorPalette/></button>
      </div>
    </nav>
  )
}

export default Navbar