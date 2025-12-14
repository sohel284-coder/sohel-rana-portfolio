import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThankYou } from './components/ThankYou';

const HomePage = () => (
  <Layout>
    <Hero />
    <About />
    <Experience />
    <Education />
    <Skills />
    <Projects />
    <Achievements />
    <Contact />
    <Footer />
  </Layout>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
