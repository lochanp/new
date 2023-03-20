import React, {useRef} from 'react'
import { motion ,useElementScroll,useTransform} from 'framer-motion';
import About from '../About';
import Work from '../Work';
import Contact from '../Contact';
import Navbar from '../../components/Navbar';

const Home = () => {
  const cursor = useRef(null)
  let {scrollYProgress} = useElementScroll();
  let y = useTransform(scrollYProgress,[0,1],['0%','380%'])
  return (
    <div>
      <div className='custom-cursor' ref={cursor}></div>
      <div className='reveal'></div>
      <Navbar />
      <div  className='top-container'>
        <motion.p 
          style={{y}}
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