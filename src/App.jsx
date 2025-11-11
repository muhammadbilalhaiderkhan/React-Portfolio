// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Projects from './components/pages/projects/Projects';
import Services from './components/pages/services/Services';
import Contact from './components/pages/contact/Contact';

function App() {
  return (
    <Router>
      <Layout>
        {/* Navigation Links */}
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link> 
          <Link to="/projects">Projects</Link> 
          <Link to="/services">Services</Link> 
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
