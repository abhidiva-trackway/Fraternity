import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Background from "/images/Door.png";
import Elephant from "/images/elephant.png";
import Peacock from "/images/Peafowl-Photoroom.png";
import LeavesLeft from "/images/leaves-left-Photoroom.png";
import LeavesRight from "/images/leaves-right-Photoroom.png";

const LandingScreen = () => {
  const controls = useAnimation();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowSize.width < 768;


  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="relative pt-96 w-full h-screen overflow-hidden bg-gradient-to-b from-pink-50 to-white">

      <div className="absolute inset-0 mt-96 bg-pink-50 bg-opacity-20 z-0"></div>

      {/* Door - Responsive sizing */}
      <motion.div
        className="absolute top-[50vh] md:top-[60vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ scale: isMobile ? 3 : 2.5, opacity: 0 }}
        animate={{ scale: isMobile ? 1.8 : 1.5, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={Background}
          alt="Wedding door"
          className="w-[60vh] md:w-[80vh] h-auto object-contain"
        />
      </motion.div>

      {/* Elephant - Responsive positioning */}
      <motion.div
        className={`absolute ${isMobile ? 'bottom-72 left-1/8' : 'bottom-0 left-1/4'} z-20`}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          y: [0, isMobile ? -15 : -30, 0]
        }}
        transition={{
          x: { duration: 1.5, delay: 0.3 },
          opacity: { duration: 1.5, delay: 0.3 },
          y: { 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut", 
            repeatType: "reverse" 
          }
        }}
      >
        <img 
          src={Elephant} 
          alt="Decorated elephant" 
          className={`${isMobile ? 'h-32' : 'h-48'}`} 
        />
      </motion.div>

      {/* Peacock - Responsive positioning */}
      <motion.div
        className={`absolute ${isMobile ? 'top-56 right-[15%]' : 'top-14 right-[27%]'} z-20`}
        initial={{ x: "100%", opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          y: [0, isMobile ? 15 : 30, 0]
        }}
        transition={{
          x: { duration: 1.5, delay: 0.6 },
          opacity: { duration: 1.5, delay: 0.6 },
          y: { 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut", 
            repeatType: "reverse" 
          }
        }}
      >
        <img 
          src={Peacock} 
          alt="Peacock" 
          className={`${isMobile ? 'h-40' : 'h-56'}`} 
        />
      </motion.div>

      {/* Left Leaves - Responsive adjustments */}
      <motion.div
        className={`absolute ${isMobile ? 'left-4 h-96 top-5/12' : 'left-28 h-full top-1/12'}  z-0`}
        initial={{ x: -100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          y: [0, isMobile ? -20 : -40, 0]
        }}
        transition={{
          x: { duration: 1 },
          opacity: { duration: 1.5 },
          y: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse"
          }
        }}
      >
        <img
          src={LeavesLeft}
          alt="Decorated leaves"
          className={`object-cover ${isMobile ? 'h-[60%]' : 'h-full'}`}
        />
      </motion.div>

      {/* Right Leaves - Responsive adjustments */}
      <motion.div
        className={`absolute ${isMobile ? 'w-1/4 right-8 top-4/12 h-96' : 'h-full right-0 left-[45%] top-0'} z-0`}
        initial={{ x: 100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          y: [0, isMobile ? 20 : 40, 0]
        }}
        transition={{
          x: { duration: 1 },
          opacity: { duration: 1.5 },
          y: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
            repeatType: "reverse"
          }
        }}
      >
        <img
          src={LeavesRight}
          alt="Decorated leaves"
          className={`object-cover ${isMobile ? 'h-[60%]' : 'h-full'}`}
        />
      </motion.div>

      {/* Logo and Text - Responsive adjustments */}
      <motion.div
        className="absolute flex justify-center flex-col items-center top-[15%] md:top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-30"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className={`image-cropper ${isMobile ? 'w-64' : 'w-48'}`}>
          <img src="/images/Gr_logo.png" alt="GR CELEBRATTIONS Logo" />
        </div>
        <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1 }}
  className={`${isMobile ? 'text-lg' : 'text-2xl'} text-pink-600 mt-2 font-serif tracking-widest font-semibold drop-shadow-sm`}
>
  {"GURUCHARAN"}
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1.3 }}
  className={`${isMobile ? 'text-lg' : 'text-2xl'} text-pink-500 mt-1 font-serif tracking-widest font-medium italic`}
>
  {"G.R. CELEBRATTIONS"}
</motion.div>

      </motion.div>
    </div>
  );
};

export default LandingScreen;