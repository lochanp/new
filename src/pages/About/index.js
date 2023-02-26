import React from 'react'
import Me from '../../assets/images/me.png'
import Me2 from '../../assets/images/me2.png'
import { motion ,useElementScroll,useTransform} from 'framer-motion';

const About = () => {

  let {scrollYProgress} = useElementScroll();
  let y = useTransform(scrollYProgress,[0,5],['10%','30%'])

  return (
    <motion.div id="about" style={{y}} className='about-section'>
      <div className='left-container'>
        <p>Hi, I am Lochan Potdar I am a Frontend developer based in Mumbai, Maharashtra.<br/> I have been working as a Front-End Developer since the last 1.5 years.</p>
        <p>I am well skilled in this profile and have experience working on multiple projects<br/> and websites meanwhile I work in a small scale Software Development company.</p>
      </div>
      <div className='right-container'>
          <img className='pic2' src={Me} alt='profile'></img>
          <img className='pic1' src={Me2} alt='profile'></img>
      </div>
    </motion.div>
  )
}

export default About