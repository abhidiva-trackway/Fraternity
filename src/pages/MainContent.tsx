import {AnimatePresence, motion} from "framer-motion";
// import VisitorCounter from "../components/VisitorCounter";
import ScrollAnimatedCardGrid from "../components/ScrollAnimatedCardGrid";
import About from "./About";
import ShareButton from "../components/ShareButton";

const MainContent = ({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (section: string) => void }) => {
  const contactNumber = '9845222522';
  const whatsappLink = `https://wa.me/${contactNumber}`;
  const callLink = `tel:${contactNumber}`;

   

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-4 px-4 sm:px-6 lg:px-8"
    >
         {/* <VisitorCounter /> */}
         {/* logo */}
            <div className="flex z-50 justify-between">
          {/*share button here */}
          <div></div>
          <ShareButton/>
          </div>

      <header className="text-center mb-12 relative overflow-hidden py-8">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-300/30 text-4xl"
            initial={{ 
              y: -50,
              x: Math.random() * 200 - 100,
              opacity: 0,
              rotate: Math.random() * 360
            }}
            animate={{ 
              y: window.innerHeight,
              opacity: [0, 0.4, 0],
              rotate: 360
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${-10 - Math.random() * 20}%`,
            }}
          >
            {['🌸', '🌿', '🍂', '🌼', '🌺', '🥀'][i % 6]}
          </motion.div>
        ))}

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center space-y-2">
  {/* Circular Gr Logo */}
  <div className="bg-gradient-to-br from-pink-300 via-white to-blue-300 p-1 rounded-full shadow-lg">
    <div className="bg-purple-900 rounded-full image-cropper flex items-center justify-center border-4 border-white">
      <img src="/images/Gr_logo.png" alt="" />
    </div>
  </div>

  {/* Since 1972 */}
  <div className="text-sm text-gray-500 tracking-wide italic">Since 1972</div>

  {/* Business Name */}
  <div className="text-center text-amber-800 font-serif tracking-widest text-xl font-bold drop-shadow">
    GURUCHARAN
  </div>
  <div className="text-center text-amber-800 font-serif tracking-widest text-xl font-bold drop-shadow">
    G. R. CELEBRATTIONS
  </div>
</div>

              <p className="text-amber-800 max-w-96">1/1-3, E.A.T Street Basavanagudi Beside Sri Guru Raghavendra Stores Near Shyamsingh Nursing Home Bengaluru - 560 004</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center space-x-4 mb-8"
          >
            <button
              onClick={() => setActiveSection('menu')}
              className={`px-4 py-2 rounded-full font-medium transition-all ${activeSection === 'menu' ? 'bg-amber-600 text-white shadow-md' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
            >
              Our Menu
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className={`px-4 py-2 rounded-full font-medium transition-all ${activeSection === 'about' ? 'bg-amber-600 text-white shadow-md' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
            >
              About Us
            </button>
          </motion.div>

         <motion.div
  initial={{ scaleY: 0 }}
  animate={{ scaleY: 1 }}
  transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
  className="overflow-hidden mb-2"
>
  <motion.h1
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl font-bold text-amber-900 mb-4 font-serif leading-tight md:leading-snug"
    style={{ 
      fontFamily: "'Playfair Display', serif",
      textShadow: '2px 2px 4px rgba(0,0,0,0.05)'
    }}
  >
    GURUCHARAN G.R. CELEBRATTIONS WARMLY WELCOMES YOU TO THE SOUL OF BANGALORE WEDDING FRATERNITY 3.0 
  </motion.h1>
</motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative inline-block"
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-amber-800/90 max-w-3xl mx-auto px-4 relative leading-relaxed"
            >
              <span className="relative z-10">
                COME FEAST. CONNECT. CELEBRATE
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-1 left-0 right-0 h-2 bg-amber-200/50 z-0"
                style={{ originX: 0 }}
              />
            </motion.p>
          </motion.div>

          {/* Contact Buttons - Fixed on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2 sm:hidden"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
            <a
              href={callLink}
              className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
</svg>
            </a>
          </motion.div>

          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="h-1 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent my-8 mx-auto max-w-md"
          />
        </div>
      </header>

      {/* Main Content Sections */}
      <AnimatePresence mode="wait">
        {activeSection === 'menu' ? (
          <motion.section
            key="menu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ScrollAnimatedCardGrid />
          </motion.section>
        ) : (<About/>
        )}
      </AnimatePresence>

      {/* Screen Contact Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden sm:flex fixed bottom-6 right-6 z-50 space-x-3"
      >
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all"
          aria-label="Contact us on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
        <a
          href={callLink}
          className="bg-amber-600 hover:bg-amber-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all"
          aria-label="Call us"
        >
          <img src="/phone-call-svgrepo-com.svg" alt="Call" className="w-6 h-6" />
        </a>
      </motion.div>

                <motion.footer 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-24 text-center text-amber-900/80 py-8 border-t border-amber-200/50"
          >
            <div className="mb-4">
              <p className="text-sm md:text-base mb-2">
                Click here to get your menu today -{' '}
                <a 
                  href="https://api.whatsapp.com/send?phone=916363797685&text=Enquiring%20about%20custom%20QR%20codes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-800 underline font-medium"
                >
                  click here
                </a>
              </p>
            </div>
            <p className="text-xs mt-2 text-amber-800/60">
              Crafted with love and tradition
            </p>
            <p className="text-xs mt-4 text-amber-900/40 font-bold">
              © All rights reserved to Blue Ticks Innovations Private Limited.
            </p>
            {/* <p className="text-sm md:text-base">
              © {new Date().getFullYear()} Royal Indian Wedding Caterers. All rights reserved.
            </p> */}
            
          </motion.footer>
    </motion.div>
  );
};


export default MainContent;