import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './assets/scss/custom.scss';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Tech from './pages/Tech';

function App() {
  const useDark = window.matchMedia('(prefers-color-scheme: dark)');
  const [isDarkMode, setisDarkMode] = useState(useDark.matches ? true : false);

  console.log(useDark.matches);
  return (
    <div className='main-bg' data-theme={isDarkMode ? 'dark' : 'lights'}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home isDarkMode={isDarkMode} setIsDarkMode={setisDarkMode} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/work' element={<Work />} />
          <Route path='/tech' element={<Tech />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
