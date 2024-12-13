import React, { useEffect } from 'react';
import Navbar from './Navbar';

import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import FooterPage from './page/FooterPage';
import Calculator from './page/Calculater';  // Fixed typo 'Calculater' -> 'Calculator'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './componat/Footer';

const App = () => {

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page
  }, []);  // Empty dependency array means this runs only once when the component mounts

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />  {/* Render Home component */}
          <Route path="/about" element={<About />} />  {/* Render About component */}
          <Route path="/contact" element={<Contact />} />  {/* Render Contact component */}
          <Route path="/footer" element={<FooterPage />} />  {/* Render Footer component */}
          <Route path="/calculator" element={<Calculator />} />  {/* Render Calculator component */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
