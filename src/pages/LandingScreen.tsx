import {motion} from "framer-motion";
 const LandingScreen = () => {
  // Enhanced floral decoration with more detail
  const FloralDecoration = ({ position }: { position: string }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5, type: 'spring' }}
        className={`absolute ${position} w-28 h-28`}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path 
            d="M50 15 Q60 0 70 15 Q85 5 85 20 Q100 30 85 40 Q95 55 85 65 Q100 75 85 85 Q75 95 65 85 Q75 100 50 85 Q25 100 35 85 Q15 95 15 85 Q0 75 15 65 Q5 55 15 40 Q0 30 15 20 Q15 5 30 15 Q40 0 50 15 Z" 
            fill="none" 
            stroke="#B45309" 
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <circle cx="50" cy="50" r="6" fill="#F59E0B" opacity="0.8" />
        </svg>
      </motion.div>
    );
  };

  // More realistic petal animation
  const Petal = ({ style }: { style: object }) => {
    return (
      <motion.div
        initial={{ y: -100, opacity: 0, rotate: Math.random() * 360 }}
        animate={{ 
          y: window.innerHeight + 100,
          opacity: [0, 0.8, 0],
          rotate: 360 + Math.random() * 180,
          x: `+=${Math.random() * 100 - 50}`
        }}
        transition={{ 
          duration: 10 + Math.random() * 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute text-amber-200/80"
        style={style}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path 
            d="M12 3C10 3 8 5 8 7C8 9 10 11 12 13C14 11 16 9 16 7C16 5 14 3 12 3Z" 
            fill="currentColor" 
          />
        </svg>
      </motion.div>
    );
  };

  const petals = Array.from({ length: 20 }).map((_, i) => (
    <Petal 
      key={i}
      style={{ 
        left: `${Math.random() * 100}%`,
        top: `${-20 - Math.random() * 20}%`,
        fontSize: `${10 + Math.random() * 16}px`,
        filter: `blur(${Math.random() * 2}px)`
      }} 
    />
  ));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-amber-800 to-amber-700 z-50 overflow-hidden"
    >
      {/* Subtle mandala background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#F59E0B" strokeWidth="0.5" />
          <path 
            d="M50 10 Q70 15 90 30 Q85 50 90 70 Q70 85 50 90 Q30 85 10 70 Q15 50 10 30 Q30 15 50 10 Z" 
            fill="none" 
            stroke="#F59E0B" 
            strokeWidth="0.3"
          />
        </svg>
      </motion.div>

      {/* Floral decorations */}
      <FloralDecoration position="top-4 left-4" />
      <FloralDecoration position="top-4 right-4" />
      <FloralDecoration position="bottom-4 left-4" />
      <FloralDecoration position="bottom-4 right-4" />

      {/* Falling petals */}
      {petals}

      {/* Main content with enhanced styling */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, type: 'spring' }}
        className="relative text-center p-8 max-w-2xl"
      >
        {/* Decorative frame */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute inset-0 rounded-full border-2 border-amber-500/30 pointer-events-none"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="absolute inset-4 rounded-full border border-amber-400/30 pointer-events-none"
        />

        {/* Welcome message */}
         <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12"
        >
         <div className="text-4xl font-bold text-amber-100 mb-2">|| Sri Rama ||</div>
         <div className="text-4xl font-bold text-amber-100 mb-6">|| Jai Vasavi ||</div>
          <motion.h1
            className="text-3xl md:text-4xl font-serif text-amber-50"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Welcome to Bangalore Wedding Fraternity
          </motion.h1>
        </motion.div>

        {/* Traditional diya with enhanced glow */}
        <motion.div 
          className="relative w-20 h-20 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-amber-700 to-amber-800 rounded-b-full shadow-lg"></div>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8],
              y: [0, -2, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-6 h-12 bg-gradient-to-b from-yellow-200 via-amber-400 to-amber-600 rounded-full blur-[3px]"></div>
            <div className="absolute inset-0 bg-yellow-200/20 rounded-full blur-[6px]"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LandingScreen;