import React from "react";
import "../css/Nav.css";
import { logo_row } from "../assets/logo";
import { exit_btn } from "../assets/icons";
import { socials } from "../constants";

const NavOpen = ({ isNavOpen }) => {
  return (
    <div className={`nav_active ${isNavOpen ? "active" : ""}`}>
      <div className="container">
        <div className="nav_top">

          <div className="logo">
            <img src={logo_row} alt="" />
          </div>

          <ul>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Virtual Assistant’s Skill Set</a>
            </li>
            <li>
              <a href="#">Process</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">Vision, Mission, Core Values</a>
            </li>
            <li>
              <a href="#">Our Story </a>
            </li>
            <li>
              <a href="#">Meet the Team</a>
            </li>
            <li>
              <a href="#">Contact Us </a>
            </li>
          </ul>
        </div>

        <div className="links">
          {socials.map((social) => (
            <a href={social.link} rel="noopener noreferrer" key={social.link}>
              <img src={social.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavOpen;
