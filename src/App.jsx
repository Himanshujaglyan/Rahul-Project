import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import MiddleContainer from './MiddleContainer';
import Footer from './Footer';
import PagiGen from './PageGen';
import DeepwareScanner from './DeepwareScanner';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MiddleContainer />} />
        <Route path="/pagi-gen" element={< PagiGen/>} />
        <Route path="/deepware-scanner" element={<DeepwareScanner />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
