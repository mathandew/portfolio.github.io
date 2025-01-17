import React from 'react'
import './about.css'
// import Me from '../../assets/MD.png'
import {FaAward} from 'react-icons/fa' 
import {FaUsers} from 'react-icons/fa' 
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About" />
          </div>
        </div> */}
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>1</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>6</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa voluptas dolores temporibus consequuntur suscipit! Tempore illo aperiam quaerat tempora perspiciatis et, non numquam sit necessitatibus quibusdam ab odit, veritatis eveniet!
          </p>

          {/* <a href="#contact" className='btn btn-primary '>Let's Talk</a> */}
        </div>
      </div>
    </section>
  )
}

export default About