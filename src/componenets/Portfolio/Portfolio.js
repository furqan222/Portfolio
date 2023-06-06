import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.JPG'
import img2 from '../../assets/portfolio2.JPG'
import img3 from '../../assets/portfolio3.JPG'
import img4 from '../../assets/portfolio4.JPG'
import img5 from '../../assets/portfolio5.JPG'
import img6 from '../../assets/portfolio6.JPG'
import img7 from '../../assets/portfolio7.JPG'
import img8 from '../../assets/portfolio8.JPG'
import img9 from '../../assets/portfolio9.JPG'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img1} alt=''></img>
          </div>
          <h3>Basic Portfolio</h3>
          <small className='portfolio__feature '>
HTML CSS JAVASCRIPT
            </small>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/furqan222/Basic-Portfolio.git' className='btn' target='_blank'>Github</a>
          <a href='https://8263cdcb.basic-portfolio-1tb.pages.dev' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img2} alt=''></img>
          </div>
          <h3>Tic-Tac-Toc Game</h3>
          <small className='portfolio__feature '>
HTML CSS JAVASCRIPT
            </small>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/furqan222/Tic-Tac-Toc.git' className='btn' target='_blank'>Github</a>
          <a href='https://3772d85c.tic-tac-toc.pages.dev' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img3} alt=''></img>
          </div>
          <h3>Calculator Website</h3>
          <small className='portfolio__feature '>
HTML CSS JAVASCRIPT
            </small>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/furqan222/Calculator.git' className='btn' target='_blank'>Github</a>
          <a href='https://83ee8748.calculator-x9j.pages.dev' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img4} alt=''></img>
          </div>
          <h3>Snake Game </h3>
          <small className='portfolio__feature '>
HTML CSS JAVASCRIPT
            </small>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/furqan222/Snake-Game.git' className='btn' target='_blank'>Github</a>
          <a href='https://ee12bcee.snake-game-co0.pages.dev' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img5} alt=''></img>
          </div>
          <h3>Coffee Shop</h3>
          <small className='portfolio__feature '>
HTML CSS JAVASCRIPT
            </small>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/furqan222/Coffee-Shop.git' className='btn' target='_blank'>Github</a>
          <a href='https://c2e65a81.coffee-shop-bjv.pages.dev' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img6} alt=''></img>
          </div>
          <h3>Adventure and Tour</h3>
          <small className='portfolio__feature'>
          HTML CSS/SASS JavaScript Swiper-JS
            </small>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/furqan222/Adventure-and-Tour.git' className='btn' target='_blank'>Github</a>
          <a href='https://9e490718.adventure-and-tour.pages.dev' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img7} alt=''></img>
          </div>
          <h3>OpenAi-Text-App</h3>
          <small className='portfolio__feature' >
React-jS OpenAi
            </small>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/furqan222/React-JS-OpenAi-App.git' className='btn' target='_blank'>Github</a>
          <a href='https://fc0b11cb.react-js-openai-app.pages.dev' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img8} alt=''></img>
          </div>
          <h3>OpenAi-Image-Generator</h3>
          <small className='portfolio__feature '>
Next-JS Open-Ai
            </small>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/furqan222/NextJS-Image-Generator.git' className='btn' target='_blank'>Github</a>
          <a href='https://fc0b11cb.react-js-openai-app.pages.dev' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img9} alt=''></img>
          </div>
          <h3>Modern Portfolio Website</h3>
          <small className='portfolio__feature'>
React-JS CSS3 Swiper-JS
            </small>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/furqan222' className='btn' target='_blank'>Github</a>
          <a href='https://87cf8305.portfolio-83o.pages.dev' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div> 
    </section>
  )
}

export default Portfolio
