import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import LandingScreen from './pages/LandingScreen';
import MainContent from './pages/MainContent';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [activeSection, setActiveSection] = useState('menu'); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <AnimatePresence>
        {showLanding ? (
         <LandingScreen />
        ) : ( 
          <MainContent activeSection={activeSection} setActiveSection={setActiveSection}/>
        )} 
      </AnimatePresence>
    </div>
  );
}



export default App;