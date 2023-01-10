import React from 'react'
import './portfolio.css'
// import Port from './Portfolio';

import img1 from  '../../images/portfolio.jpeg'
import img2 from  '../../images/Survey.jpeg'
import img3 from  '../../images/Recipe.jpeg'

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img3} alt="portfolio" />

          </div>
     
          <div className='profile__cta'>
          <a href='https://github.com/Alexkimathi/ReceipeApp' className='btn btn primary' target='_blank'  rel="noopener noreferrer">Github</a>
          <a href='https://alexkimathi.github.io/ReceipeApp/' className='btn' target='_blank'  rel="noopener noreferrer">Live Demo</a>

          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img2} alt="portfolio" />

          </div>
        
          <div className='profile__cta'>
          <a href='https://github.com/Alexkimathi/survey' className='btn btn primary' target='_blank'  rel="noopener noreferrer">Github</a>
          <a href='https://survey-beta.vercel.app/' className='btn' target='_blank'  rel="noopener noreferrer">Live Demo</a>

          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img1} alt="portfolio" />

          </div>
   
          <div className='profile__cta'>
          <a href='https://github.com/Alexkimathi/kims-portfolio' className='btn btn primary' target='_blank'  rel="noopener noreferrer">Github</a>
          <a href='http://survey-3e3p.vercel.app/' className='btn' target='_blank'  rel="noopener noreferrer">Live Demo</a>

          </div>
         
        </article>
      </div>

    </section>
  )
}

export default Portfolio