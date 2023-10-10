import React from "react";
import "./about.css";
import aboutImage from "../../images/Frame.png";
import cv from "../../assests/resume.pdf";
import { HiDownload } from "react-icons/hi";
import Card from "../../components/Card";
import data from "./data";

function About() {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={aboutImage} alt="about" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>

          <p>
            I am an Information and Technology (IT) graduate from Dedan
            Kimathi University of Technology. I have also just graduated from
            Moringa School with a certificate in Full-stack software
            Development. I have previously worked at calwide Solution as a
            Software Developer intern before joining Moringa School for my
            Boot-Camp. I am a person of high integrity with excellent
            communication and technical skills, flexible and a great team
            player. I believe in hard work and devotion which can complement
            your team and also improve my skills. An opportunity to further
            discuss this will be appreciated. Thank you in advance Kind Regards,
            Alex Kimathi Murithi
          </p>

          <a
            href={cv}
            Download
            className="btn primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Cv <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
