import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programmes } from './components/Programmes';
import { AcademicsRecords } from './components/AcademicsRecords';
import { CampusLife } from './components/CampusLife';
import { NewsAndEvents } from './components/NewsAndEvents';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-iimGreen selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Programmes />
        <AcademicsRecords />
        <CampusLife />
        <NewsAndEvents />
      </main>
      <Footer />
    </div>
  );
}

export default App;