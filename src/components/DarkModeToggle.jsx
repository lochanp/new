import React from 'react';
import Sun from '../assets/images/sun.png';
import Moon from '../assets/images/moon.png';
const DarkModeToggle = ({ handleChange, isChecked }) => {
  return (
    <div>
      {/* <input type='checkbox' className='toggle' onChange={handleChange} checked={isChecked} id='check'></input> */}
      <img
        onChange={handleChange}
        onClick={handleChange}
        id='theme-icon'
        src={isChecked ? Sun : Moon}
        style={{ width: isChecked ? '40px' : '' }}
        alt='moon-sun'
      />
    </div>
  );
};

export default DarkModeToggle;
