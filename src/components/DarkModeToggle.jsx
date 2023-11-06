import React from 'react';

const DarkModeToggle = ({ handleChange, isChecked }) => {
  return (
    <div>
      {/* <input type='checkbox' className='toggle' onChange={handleChange} checked={isChecked} id='check'></input> */}
      <img
        onChange={handleChange}
        onClick={handleChange}
        id='theme-icon'
        src={
          isChecked
            ? 'https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg'
            : 'https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg'
        }
        alt='ERR'
      />
    </div>
  );
};

export default DarkModeToggle;
