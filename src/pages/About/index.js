import React from 'react'
import Me from '../../assets/images/me.png'
import Me2 from '../../assets/images/me2.png'
const About = () => {
  return (
    <div className='about-section'>
      <div className='left-container'>
        Hi, I am Lochan Potdar I am a Frontend developer. I have been working in this profile since the last 1.5 years.
      </div>
      <div className='right-container'>
          <img src={Me} alt='profile'></img>
          <img src={Me2} alt='profile'></img>
      </div>
    </div>
  )
}

export default About