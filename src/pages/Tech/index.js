import React from 'react';
import javascript from '../../assets/images/javascript.png';
import css from '../../assets/images/css.png';
import html from '../../assets/images/html.png';
import typescript from '../../assets/images/typescript.png';
import reactjs from '../../assets/images/reactjs.png';
import tailwind from '../../assets/images/tailwind.png';
import redux from '../../assets/images/redux.png';
import git from '../../assets/images/git.png';
import BallCanvas from '../../components/Ball';

import nextjs from '../../assets/images/nextjs.png';
import materialUI from '../../assets/images/materialui.png';

import { Tilt } from 'react-tilt';

const Tech = () => {
  const technologies = [
    {
      name: 'HTML 5',
      icon: html,
      duration: 8
    },
    {
      name: 'CSS 3',
      icon: css,
      duration: 10
    },
    {
      name: 'JavaScript',
      icon: javascript,
      duration: 13
    },
    {
      name: 'TypeScript',
      icon: typescript,
      duration: 8
    },
    {
      name: 'React JS',
      icon: reactjs,
      duration: 17
    },
    {
      name: 'Redux Toolkit',
      icon: redux,
      duration: 13
    },
    {
      name: 'Tailwind CSS',
      icon: tailwind,
      duration: 16
    },
    {
      name: 'NextJS',
      icon: nextjs,
      duration: 12
    },

    {
      name: 'git',
      icon: git,
      duration: 18
    },
    {
      name: 'material UI',
      icon: materialUI,
      duration: 9
    }
  ];

  return (
    <div className=' mt-[100px] text-center tech-container'>
      <p className='gradient-text drop-shadow-sm font-light text-xl'>Drag your mouse over these technology balls ^_^</p>
      <div className='flex justify-center tech-balls-container '>
        <div className=' flex flex-row flex-wrap justify-center gap-9 w-[50vw] tech-balls'>
          {technologies.map((tech, i) => (
            <Tilt>
              <div
                key={i}
                className='w-28 h-28'
                animate={{ rotate: 360 }}
                transition={{ duration: tech.duration, loop: 4 }}
              >
                <BallCanvas icon={tech.icon} />
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
