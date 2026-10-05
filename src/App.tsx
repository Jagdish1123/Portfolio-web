import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EngineeringDepth from './components/EngineeringDepth';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <EngineeringDepth />
        <About />
      </div>
    </div>
  );
}

export default App;