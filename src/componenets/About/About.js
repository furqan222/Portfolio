import React from 'react'
import './about.css'
import ME from '../../assets/me.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FaFolderPlus} from 'react-icons/fa'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' className='me-img'></img>
          </div>
        </div>
        <div className='about__content'>
           <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className='about__card'>
              <FaFolderPlus className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
           </div>
           <p>I am a Highly motivated and adaptive front-end REACT-JS developer.
              I bring to the table strong skills in communication, problem-solving,
              logic, and analytical thinking. Being a professional I am a quick learner 
              and highly passionate about my carrier.</p>
           <a href='' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
