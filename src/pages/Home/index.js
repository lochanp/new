import React, {useRef} from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import About from '../About';
import Work from '../Work';
import Contact from '../Contact';
import Navbar from '../../components/Navbar';

const Home = () => {
  const cursor = useRef(null)
  return (
    <div>
      <div className='custom-cursor' ref={cursor}></div>
      <div className='reveal'></div>
      <Navbar />
      <div className='top-container'>
        {/* <div className='menu-links'>
          <Link to='/about' className='about-link'>ABOUT</Link>
          <Link to='/work' className='work-link' href='/'>WORK</Link>
          <Link to='/contact' className='contact-link' href='/'>CONTACT</Link>
        </div> */}
        <motion.p 
          className='bg-big' 
          animate={{ x:1250 }}
          transition={{ duration: 3 }}>
            Hello
        </motion.p>
         <div className='center-box'>
            <motion.div  
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} 
              transition={{duration:4}} 
              className='name-container'>
                <p className='my-name'>I'm Lochan Potdar</p>
                <p className='info-text'>A Creative Web Developer/Designer</p>
            </motion.div>
          </div>
      </div>
      <About />
      <Work />
      <Contact />
    </div>
  )
}

export default Home;