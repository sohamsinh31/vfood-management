import React from 'react'
import "./styles.css"
import logo from "../../Assets/vfood.png"

const NavBar = () => {  
  return (
    <div className='mainNavbar'>
      <img src={logo} alt='logo' className='logoImage' />
      <input type='text' className='navInput' placeholder='SEARCH' />
      <img src="../../Assets/menubutton.png" alt='Menu' className='menuImage' />
    </div>
  )
}

export default NavBar
