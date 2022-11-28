import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mouseEnter, setmouseEnter] = useState()

  return (
    <div>
    <div className='menu-links'>
          <Link to='/about' className={mouseEnter === 'about' ? 'about-link hovered' :'about-link'} onMouseLeave={()=> setmouseEnter()} onMouseEnter={() => setmouseEnter('about')}>ABOUT</Link>
          <a to='/' className={mouseEnter === 'work' ? 'work-link hovered' :'work-link'} onMouseLeave={()=> setmouseEnter()} onMouseEnter={() => setmouseEnter('work')} href='https://lochanp.github.io/personal-portfolio/#projects'>WORK</a>
          <Link to='/contact' className={mouseEnter  === 'contact' ? 'contact-link hovered' :'contact-link'} onMouseLeave={()=> setmouseEnter()} onMouseEnter={() => setmouseEnter('contact')} href='/'>CONTACT</Link>
    </div> 
    {/* <img src={SunIcon} alt='light-mode-icon'></img> */}
  </div>
  )
}

export default Navbar