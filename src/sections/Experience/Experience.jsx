import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SAAS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* end of frontend */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Ruby On Rails</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Postgress</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySql</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
