import React from 'react'
import './Footer.css'
import Github from '../../assets/github.jpg'
import Instagram from '../../assets/instagram.jpg'
import LinkedIn from '../../assets/linkedin.jpg'
import Logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="github" />
          <img src={Instagram} alt="instagram" />
          <img src={LinkedIn} alt="linkedin" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" className='logo' />
        </div>
      </div>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div >
  )
}

export default Footer

