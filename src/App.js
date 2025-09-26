import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import MainContent from './MainContent';
import ContactPage from './ContactPage';
import Footer from './Footer';

import './App.css';
import 'animate.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;