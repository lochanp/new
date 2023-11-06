import React from 'react';
import { workData } from '../../data';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import gitHubIcon from '../../assets/images/GitHub-logo.png';

const Work = () => {
  // const navigate = useNavigate();

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

  return (
    <div id='work' className='work-page mt-[170px]'>
      <motion.div className='flex flex-col justify-center items-center heading-container' variants={textVariant(3)}>
        <p className='tracking-wider text-xl text-gray-600 heading-intro'>MY WORK</p>
        <p className='text-[#E48586] md:text-[60px] sm:text-[50px] xs:text-[40px] drop-shadow-md heading'>
          Here are some of my projects..
        </p>
      </motion.div>
      {/* <motion.p variant={fadeIn('', '', 10, 10)} className='mt-3 text-gray-600 text-[17px] max-w-3xl leading-[30px]'>
        bdhjfbejrbfjehrbfjerbfjberqjhfbeqrjh jbfjherbfjber jhrbfjherb
      </motion.p> */}
      <div className='w-full flex justify-center'>
        <div className='mt-20 flex gap-7  flex-wrap justify-center work-containe'>
          {workData.map((e, i) => (
            <a className='box work-card' rel='noreferrer' key={i} href={e.link} target='_blank'>
              {/* <div className='img-box'>
              <img src={e.imgUrl} alt='project pic'></img>
            </div>
            <p className='title'>{e.title}</p> */}
              <motion.div variant={fadeIn('up', 'spring', i * 0.5, 2)}>
                <Tilt
                  options={{ max: 45, scale: 1, speed: 450 }}
                  className='bg-gradient-to-r shadow-card from-purple-100  to-pink-100 rounded-2xl sm:w-[360px] w-[200px]'
                  onClick={() => window.open(e.link, '_blank')}
                >
                  <div className='relative w-full justify-center items-center flex flex-col h-[230px]'>
                    <img src={e.imgUrl} alt='project' className='w-[95%] object-contain rounded-2xl'></img>
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                      <div
                        className='bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        onClick={() => window.open(e.githubLink, '_blank')}
                      >
                        <img src={gitHubIcon} alt='github'></img>
                      </div>
                    </div>
                  </div>
                  <div className='p-5'>
                    <h3 className='text-pink-950 font-bold text-[18px]'>{e.title}</h3>
                    <p>{e.description}</p>
                    <div className='mt-4 flex flex-wrap gap-2'>
                      {e.tags.map((tag, i) => (
                        <p key={i} className='gradient-text'>
                          {tag}
                        </p>
                      ))}
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
