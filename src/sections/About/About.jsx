import React from "react";
import "./about.css";
import aboutImage from "../../images/Frame.png";
import cv from "../../assests/cv.pdf";
import { HiDownload } from "react-icons/hi";
import Card from '../../components/Card'
import data from './data'

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
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className="about__card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            ad illum, placeat deserunt officia ipsa consectetur mollitia sit
            eius eum explicabo voluptate iste necessitatibus sequi nostrum,
            culpa suscipit? Quia, vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            atque placeat distinctio nam nulla omnis maiores, consectetur
            aperiam perspiciatis ullam pariatur. Minima, dolorum ratione quo
            magnam mollitia possimus perspiciatis illo.
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
