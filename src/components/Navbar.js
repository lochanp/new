import React, { useState } from 'react'

const Navbar = () => {
  const [mouseEnter, setmouseEnter] = useState()

  return (
    <div>
    <div className='menu-links'>
          <a to='#about' className={mouseEnter === 'about' ? 'about-link hovered' :'about-link'} onMouseLeave={()=> setmouseEnter()} onMouseEnter={() => setmouseEnter('about')} href='#about'>ABOUT</a>
          <a to='#work' className={mouseEnter === 'work' ? 'work-link hovered' :'work-link'} onMouseLeave={()=> setmouseEnter()} onMouseEnter={() => setmouseEnter('work')} href='#work'>WORK</a>
          <a to='#contact' className={mouseEnter  === 'contact' ? 'contact-link hovered' :'contact-link'} onMouseLeave={()=> setmouseEnter()} onMouseEnter={() => setmouseEnter('contact')} href='#contact'>CONTACT</a>
    </div> 
    {/* <img src={SunIcon} alt='light-mode-icon'></img> */}
  </div>
  )
}

export default Navbar