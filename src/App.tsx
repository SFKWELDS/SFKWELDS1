import { Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import Overview from './components/Overview';
import Founder from './components/Founder';
import Services from './components/Services';
import Process from './components/Process';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


// Homepage with all your sections
function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Overview />
      <Projects />
      <Services />
      <Process />
      <Founder />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    
    </Routes>
  );
}
