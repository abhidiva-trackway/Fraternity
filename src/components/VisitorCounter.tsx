import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  const  hasIncremented = useRef(false);
  
  useEffect(() => {
    if (hasIncremented.current) return;


    const savedCount = localStorage.getItem('visitorCount');
    const initialCount = savedCount ? parseInt(savedCount, 10) : 0;
    
    const newCount = initialCount + 1;
    
    setCount(newCount);
    localStorage.setItem('visitorCount', newCount.toString());
    hasIncremented.current = true;
  }, []); 

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      className="fixed bottom-6 left-6 z-50 bg-white/80 backdrop-blur-sm rounded-full shadow-lg px-4 py-2 flex items-center border border-amber-200"
    >
      <div className="flex items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#B45309" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="mr-2"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
        <span className="text-amber-900 font-medium">
          {count.toLocaleString()}+ visitors
        </span>
      </div>
    </motion.div>
  );
};

export default VisitorCounter;