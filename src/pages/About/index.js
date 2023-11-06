import React from 'react';
import ReactIcon from '../../assets/images/React-icon.png';
import TypescriptIcon from '../../assets/images/Typescript_logo.png';
import JavascriptIcon from '../../assets/images/JavaScript-logo.png';
import { motion, useElementScroll, useTransform } from 'framer-motion';
import { Tilt } from 'react-tilt';

const About = () => {
  let { scrollYProgress } = useElementScroll();
  let y = useTransform(scrollYProgress, [0, 5], ['10%', '30%']);

  const textVariant = delay => {
    return {
      hidden: {
        y: -50,
        opacity: 0
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 1.25,
          delay: delay
        }
      }
    };
  };

  const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: 'easeOut'
        }
      }
    };
  };
  const openPDFInNewTab = () => {
    // Define the path to your PDF file
    const pdfFilePath = '/lochanpotdar.pdf';

    // Open the PDF file in a new tab
    window.open(pdfFilePath, '_blank');
  };

  return (
    <motion.div id='about' style={{ y }} className='about-section' variants={textVariant(2)}>
      <div className='flex flex-col justify-center items-center heading-container'>
        <p className='tracking-wider text-xl text-gray-600 heading-intro'>INTRODUCTION</p>
        <p className='text-[#E48586] md:text-[60px] sm:text-[50px] xs:text-[40px]  heading drop-shadow-md main-heading'>
          Overview
        </p>
      </div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='my-intro mt-4 text-secondary text-[17px] max-w-3xl leading-[34px] text-center font-bold text-gray-600'
      >
        Hi, Lochan Potdar here a Frontend developer based in Mumbai, Maharashtra. I am well skilled in Typescript,
        Javascript and expertise in ReactJS/NextJS. Recently I am getting my hands on 3D web animations and have worked
        with libraries like Framer Motion, ThreeJS & GSAP.<br></br> I have been working as a Front-End Developer for
        more than 2 years. With experience working on multiple real world projects and websites meanwhile I work at
        Binaryveda a boutique Software Development company.
      </motion.p>
      <p
        onClick={openPDFInNewTab}
        className='gradient-text-pink font-bold text-lg underline underline-offset-1 cursor-pointer mt-2 drop-shadow-md transform transition duration-500 
        hover:scale-105'
      >
        Click here to take a look at my Resume and know more about me ^_^
      </p>
      <div className='mt-[40px] flex flex-wrap gap-10 tech-cards'>
        <Tilt className='xs:w-[250px] w-full tech-card'>
          <motion.div
            variants={fadeIn('right', 'spring', 0.5 * 1, 0.75)}
            className='w-full h-[230px] from-pink-300 rounded-[20px] shadow-xl shadow-[#d2a2aaa1] tech-card'
          >
            <div
              className='to-purple-400 rounded-[20px] px-12 min-h-[280px] flex justify-center items-center pb-7'
              options={{ max: 45, scale: 1, speed: 450 }}
            >
              <img
                animate={{ rotate: 360 }}
                transition={{ duration: 10, loop: Infinity, delay: 3 }}
                src={JavascriptIcon}
                alt='react icon'
              ></img>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='xs:w-[250px] w-full tech-card'>
          <motion.div
            variants={fadeIn('right', 'spring', 0.5 * 1, 0.75)}
            className='w-full h-[230px] from-pink-300  rounded-[20px] shadow-xl shadow-[#d2a2aa] tech-card'
          >
            <div
              className='to-purple-400 rounded-[20px] px-12 min-h-[280px] flex justify-evenly items-center pb-7'
              options={{ max: 45, scale: 1, speed: 450 }}
            >
              <motion.img
                animate={{ rotate: 360 }}
                transition={{ duration: 10, loop: Infinity, delay: 3 }}
                src={ReactIcon}
                alt='react icon'
              ></motion.img>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='xs:w-[250px] w-full tech-card'>
          <motion.div
            variants={fadeIn('right', 'spring', 0.5 * 1, 0.75)}
            className='w-full h-[230px] from-pink-300 rounded-[20px] shadow-xl shadow-[#d2a2aa] tech-card'
          >
            <div
              className='to-purple-400 rounded-[20px] px-12 min-h-[280px] flex justify-evenly items-center pb-7'
              options={{ max: 45, scale: 1, speed: 450 }}
            >
              <img
                animate={{ rotate: 360 }}
                transition={{ duration: 10, loop: Infinity, delay: 3 }}
                src={TypescriptIcon}
                alt='react icon'
              ></img>
            </div>
          </motion.div>
        </Tilt>
      </div>
      {/* <div className='left-container'>
        <p>
          Hi, Lochan Potdar here a Frontend developer based in Mumbai, Maharashtra.
          <br /> I have been working as a Front-End Developer for more than 2 years now.
        </p>
        <p>
          I am well skilled in this profile and have experience working on multiple projects
          <br /> and websites meanwhile working at Binaryveda a boutique Software Development company.
        </p>
      </div>
      <div className='right-container'>
        <img className='pic2' src={Me} alt='profile'></img>
        <img className='pic1' src={Me2} alt='profile'></img>
      </div> */}
    </motion.div>
  );
};

export default About;
