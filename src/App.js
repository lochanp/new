import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home'
// import About from './pages/About'
import './assets/scss/_custom.scss'
// import Contact from './pages/Contact';
// import Work from './pages/Work';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} /> */}
          
        </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
