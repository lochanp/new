import React from 'react'
import { workData } from '../../data';

const Work = () => {
  // const navigate = useNavigate();
  return (
    <div className='work-page'>
      <p className='heading'>Here are some of my projects..</p>
      <div className='grid-container'>
      {workData.map((e,i) => (
          <a className='box' rel="noreferrer" key={i} href={e.link} target='_blank'>
            <div className='img-box'><img src={e.imgUrl} alt='project pic'></img></div>
            <p className='title'>{e.title}</p>
          </a>
      ))}
      </div>
    </div>
  )
}

export default Work;