import React from "react";
import "./header.css";
import headerimage from "../../images/3.jpeg";
import data from "./data";

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={headerimage} alt="header" />
        </div>
        <h3>Alex kimathi</h3>
        <p>
          I'm A software Engineer!  proficient with MERN stack and Ruby
          On Rails
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">
            let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
