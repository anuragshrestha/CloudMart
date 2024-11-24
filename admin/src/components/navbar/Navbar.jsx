import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import product_36 from '../../assets/product_36.png'
import navprofileIcon from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} className='nav-logo' alt="" />
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
