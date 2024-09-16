import React from 'react';
import "../css/Contact.css";
import { logo_col } from '../assets/logo';
import { socials } from '../constants';
import TitleHead from '../parts/TitleHead';

const Contact = () => {
  return (
    <section className='contact padding_side'>

      <div className="form_side">
        <span>CONRACT FORM</span>
        <TitleHead header="We are here to serve you..."/>
        <br />
        <form>
          <div className="client_name">
            <input type="text" id="clname" className='poppins-regular' name="clname" placeholder="NAME" />
            <input type="email" id="clemail" className='poppins-regular' name="clemail" placeholder="EMAIL" />
          </div>
          <input type="text" id="clsubject" className='poppins-regular' name="clsubject" placeholder="SUBJECT" />
          <textarea type="text" id="clMessage" className='poppins-regular' name="clMessage" placeholder="MESSAGE" />
          
          <button type="submit" className='cta poppins-regula'>Submit</button>
        </form>
      </div>

      <div className="links_side">
        <img src={logo_col} alt="" />

        <div>
          <div className="form">
            <h1>FILL OUT FORM</h1>
            <a href="#" className="cta">LET'S GET STARTED</a>
          </div>

          <div className="email">
            <h1>Email</h1>
            <a href="#">gwynda@hirecultureva.com</a>
            <a href="#">kyle@kyledraper.com</a>
          </div>
        </div>

        <div>
          <div className="guide">
            <h1>TO BOOK A MEETING</h1>
            <a href="#" className="cta">CLICK HERE!</a>
          </div>

          <div className="socials">
            <h1>SEE US ON</h1>
            <div className="link">
              {socials.map((social) => (
                <a href={social.link} rel="noopener noreferrer">
                  <img src={social.icon} alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
