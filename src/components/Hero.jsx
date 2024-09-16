import React from 'react'

import { logo_row_white } from '../assets/logo'
import { hero } from '../assets/img'
import { socials } from "../constants"
import '../css/Hero.css'
import Nav from '../parts/Nav'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="top padding_side">
        <img src={ logo_row_white } alt="*hero header*" />
      </div>

      <div className="bottom">
        <div className="img">
          <img src={hero} alt="hero" />
        </div>  
        <div className="header .padding_r_side">
          <div className="title">
            <h1 className='poppins-semibold text-justify'>We Don’t Just Fill Positions -</h1>
            <h1 className='poppins-semibold text-justify'>We Build Teams</h1>
          </div>
          <p className='poppins-light'>Elevate Your Team with CULTURE</p>

          <a href="#" className='poppins-light'>Learn More Now</a>

          <div className="socials">
            {socials.map((social) => (
              <a href={social.link} rel="noopener noreferrer">
                <img src={social.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero