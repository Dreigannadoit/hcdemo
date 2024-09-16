import React from 'react'
import "../css/footer.css";
import { socials } from '../constants'
import { logo_row } from '../assets/logo'

const Footer = () => {
  return (
    <footer className="padding_side">
      <div className="footer_top">
        <div className="rght">
          <img src={logo_row} alt="" />
          <div className="socials">
            {socials.map((social) => (
              <a href={social.link} rel="noopener noreferrer">
                <img src={social.icon} alt="" />
              </a>
            ))}
          </div>
        </div>

        <div className="left">
          <a href="#" target="_blank" rel="noopener noreferrer">Link 1</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Link 2</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Link 3</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Link 4</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Link 5</a>
        </div>
      </div>

      <div className="footer_btm">
        <span>© COPYRIGHT 2024 || HIRE CULTURE</span>
      </div>
    </footer>
  )
}

export default Footer