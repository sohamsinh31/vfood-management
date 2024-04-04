import React from 'react'
import "./styles.css"
import logo from "../../Assets/vfood.png"
import mb from "../../Assets/menubutton.png"

const NavBar = () => {  
  return (
    <div className='mainNavbar'>
      <img src={logo} alt='logo' className='logoImage' />
      <input type='text' className='navInput' placeholder='SEARCH' />
      <img src={mb} alt='Menu' className='menuImage' />
    </div>
  )
}

export default NavBar
