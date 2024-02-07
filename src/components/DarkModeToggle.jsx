import React from 'react';
import Sun from '../assets/images/icons8-sun.svg';
const DarkModeToggle = ({ handleChange, isChecked }) => {
  return (
    <div>
      {/* <input type='checkbox' className='toggle' onChange={handleChange} checked={isChecked} id='check'></input> */}
      <img
        onChange={handleChange}
        onClick={handleChange}
        id='theme-icon'
        src={isChecked ? 'https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg' : Sun}
        alt='ERR'
      />
    </div>
  );
};

export default DarkModeToggle;
