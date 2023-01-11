import React from 'react'
import Hey1 from '../../assets/images/hey.png'
import { motion ,useElementScroll,useTransform} from 'framer-motion';

const Contact = () => {

  let {scrollYProgress} = useElementScroll();
  let y = useTransform(scrollYProgress,[0,1],['0%','30%'])

  return (
    <motion.div style={{y}} id='contact' className='contact-page'>
      <p className='heading'>Interested in working with me?</p>
      <div className='main'>
        <div className='info-container'>
          <p className='info'>Get In Touch.<br/> I am always up for a discussion</p>
          <div className='mail'><a href='mailto:lochan.potdar1998@gmail.com'>Send a Mail</a></div>
        </div>
        <div className='img-container'>
        <img className='hey-1' src={Hey1} alt=''></img>
          {/* <img className='hey-2' src={Hey2} alt=''></img> */}
          
        </div>
      </div>
    </motion.div>
  )
}

export default Contact