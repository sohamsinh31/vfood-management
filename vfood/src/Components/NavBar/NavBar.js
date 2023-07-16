import React from 'react'
import "./styles.css"
import logo from "../../Assets/menubutton.png"

const NavBar = () => {
  return (
    <div className='mainNavbar'>
      <img src="Assets/vfood.png" alt='logo' className='logoImage' />
      <input type='text' className='navInput' placeholder='SEARCH' />
      <img src={logo} alt='Menu' className='menuImage' />
    </div>
  )
}

export default NavBar
