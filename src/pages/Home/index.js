import React, { useEffect, useRef, useState } from 'react';
import { motion, useElementScroll, useTransform } from 'framer-motion';
import About from '../About';
import Work from '../Work';
import Contact from '../Contact';
import Navbar from '../../components/Navbar';
import Tech from '../Tech';
import DarkModeToggle from '../../components/DarkModeToggle';

const Home = props => {
  const cursor = useRef(null);
  let { scrollYProgress } = useElementScroll();
  let y = useTransform(scrollYProgress, [0, 1], ['0%', '440%']);
  const [isMobile, setMobile] = useState();

  useEffect(() => {
    setMobile(window.innerWidth >= 200 && window.innerWidth <= 400);
  }, []);

  return (
    <div>
      <div
        onClick={() => props.setIsDarkMode(!props.isDarkMode)}
        className={`theme-container ${props.isDarkMode ? 'shadow-dark' : 'shadow-light change'} cursor-pointer`}
      >
        <DarkModeToggle isChecked={props.isDarkMode} handleChange={() => props.setIsDarkMode(!props.isDarkMode)} />
      </div>
      <div className='custom-cursor' ref={cursor}></div>
      <div className='reveal'></div>
      <Navbar />
      <div className='top-container'>
        <motion.p
          style={{ y }}
          className='bg-big'
          animate={{ x: 1250, rotateZ: isMobile ? 270 : 0 }}
          transition={{ duration: 3 }}
        >
          Hello
        </motion.p>
        <div className='center-box'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4 }}
            className='name-container'
          >
            <p className='my-name drop-shadow-md'>I'm Lochan Potdar</p>
            <p className='info-text text-xl drop-shadow-md'>A Creative Web Developer.</p>
          </motion.div>
        </div>
      </div>
      <About />
      <Work />
      <Tech />
      <Contact />
    </div>
  );
};

export default Home;
