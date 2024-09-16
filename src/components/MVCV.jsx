import React from "react";
import "../css/MVCV.css";
import TitleHead from "../parts/TitleHead";
import { core_val, mission, vision } from "../assets/icons";

const MVCV = () => {
  return (
    <section className="mvcv padding_side">
      <div className="content">
        <div className="block text-justify">
          <TitleHead header="Mission" />
          <br />
          <p>
            Our mission is to provide exceptional remote support by finding,
            onboarding, and training virtual assistants for those needing help
            with ongoing tasks and projects. We are dedicated to enhancing
            productivity, fostering innovation, and enabling our clients to
            achieve their goals with efficiency and excellence. Through
            personalized and reliable virtual solutions, we strive to create a
            positive impact on the organizations and communities we serve.
          </p>
          <img src={ mission } alt="" />
        </div>

        <div className="block text-justify">
          <TitleHead header="Vision" />
          <br />
          <p>
            At Hire Culture, our vision is to help mission-driven individuals and
            teams of all sizes reach their full potential through remote support
            and virtual services.
          </p>
          <img src={ vision } alt="" />
        </div>

        <div className="block text-justify">
          <TitleHead header="Core Values" />
          <br />
          <p>We believe...</p>
          <div className="lists">
            <ul>
              <li>
                <b>Everyone</b> has a <b>purpose</b> and <b>message</b> to share
                with others.
              </li>
              <li>
                <b>Great teams</b> create a culture of <b>compassion</b> and{" "}
                <b>trust</b>.
              </li>
              <li>
                <b>True success</b> is the result of personal{" "}
                <b>responsibility</b> and <b>integrity</b>.
              </li>
            </ul>

            <ul>
              <li>
                <b>Healthy leaders inspire growth</b> through <b>vision, influence</b>, and <b>empowerment</b>.
              </li>
              <li><b>Serving others</b> well means being <b>adaptable, authentic</b>, and <b>accepting</b>.</li>
            </ul>
          </div>

          <img src={ core_val } alt="" />
        </div>
      </div>
    </section>
  );
};

export default MVCV;
