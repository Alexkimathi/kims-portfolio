import React from 'react'
import './portfolio.css'
// import Port from './Portfolio';

import img1 from  '../../images/portfolio1.jpg'
import img2 from  '../../images/portfolio2.jpg'
// import img3 from  '../../images/porfolio3.jpg'

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img1} alt="portfolio" />

          </div>
          <h3>This is a Portfolio</h3>
          <div className='profile__cta'>
          <a href='https://github.com' className='btn btn primary' target='_blank'  rel="noopener noreferrer">Github</a>
          <a href='https://github.com' className='btn' target='_blank'  rel="noopener noreferrer">Live Demo</a>

          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img2} alt="portfolio" />

          </div>
          <h3>This is a Portfolio</h3>
          <div className='profile__cta'>
          <a href='https://github.com' className='btn btn primary' target='_blank'  rel="noopener noreferrer">Github</a>
          <a href='https://github.com' className='btn' target='_blank'  rel="noopener noreferrer">Live Demo</a>

          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img2} alt="portfolio" />

          </div>
          <h3>This is a Portfolio</h3>
          <div className='profile__cta'>
          <a href='https://github.com' className='btn btn primary' target='_blank'  rel="noopener noreferrer">Github</a>
          <a href='https://github.com' className='btn' target='_blank'  rel="noopener noreferrer">Live Demo</a>

          </div>
         
        </article>
      </div>

    </section>
  )
}

export default Portfolio