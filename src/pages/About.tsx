import {motion} from "framer-motion"
const About = () => {
    const contactNumber = '9845222522';
  const whatsappLink = `https://wa.me/${contactNumber}`;
  const callLink = `tel:${contactNumber}`;
  return (
    ( 
          <motion.section
            key="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-md p-8 border border-amber-200/50">
             
              
             <motion.div
  className="flex flex-col md:flex-row gap-8 mb-12 px-4 md:px-0"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
>
  <div className="md:w-3/3 mx-auto">
    {/* Section Heading */}
    <h3 className="text-3xl text-center font-bold text-amber-800 mb-4 font-serif border-b-2 border-amber-300 pb-2">
      Our Story
    </h3>

    {/* Intro Text */}
    <p className="text-amber-900/90 mb-4 text-lg leading-relaxed">
      Founded by <span className="font-semibold">Gurucharan C.G</span><br />
      We are <span className="font-bold">GR CELEBRATIONS</span>, your go-to team for any catering needs.
    </p>

    {/* Story Highlights */}
    <div className="space-y-5 text-amber-900/90 leading-relaxed text-base">
      <p className="font-semibold text-amber-800 text-lg">
        GR CELEBRATIONS – A Symphony of Tradition, Taste & Thoughtfulness
      </p>

      <p>
At GR CELEBRATTIONS we don't just serve food—we craft experiences. Rooted in the vibrant heritage of South India and reimagined with inventive flair, our culinary philosophy is simple: celebrate tradition, innovate with elegance, and nourish mindfully.      </p>

      <p>
     We've been serving delicious food and sweets across Karnataka, Tamil Nadu, Telangana, and Andhra Pradesh and we absolutely love being part of your special moments, whether it's weddings, housewarming functions, or any big celebration.      </p>
    </div>
  </div>
</motion.div>


              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="bg-amber-50/80 p-6 rounded-xl border border-amber-200 shadow-sm">
                  <h4 className="text-xl font-bold text-amber-900 mb-5 pb-2 border-b border-amber-200 font-serif">Our Core Values</h4>
                  <ul className="space-y-4">
                    {[
                      { value: "Quality", description: "in ingredients" },
                      { value: "Excellence", description: "in service" },
                      { value: "Respect", description: "for tradition" },
                      { value: "Innovation", description: "in South-Indian & fusion cuisine" },
                      { value: "Dedication", description: "to client satisfaction" }
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="relative mt-1 mr-3 flex-shrink-0">
                          <motion.span
                            className="block w-3 h-3 rounded-full bg-amber-500"
                            whileHover={{ scale: 1.3 }}
                          />
                          <motion.span
                            className="absolute inset-0 rounded-full bg-amber-300 opacity-0"
                            whileHover={{ opacity: 0.4, scale: 1.8 }}
                          />
                        </span>
                        <span className="text-amber-900/90">
                          <strong className="text-amber-800 font-medium">{item.value}</strong> {item.description}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50/80 p-6 rounded-xl border border-amber-200 shadow-sm">
                  <h4 className="text-xl font-bold text-amber-900 mb-5 pb-2 border-b border-amber-200 font-serif">Our Promise</h4>
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-lg font-semibold text-amber-800 mb-2">Every Event Deserves a Culinary Masterpiece</h5>
                      <p className="text-amber-900/90 leading-relaxed">
                        From cozy gatherings to grand galas, GURUCHARAN GR CELEBRATTIONS turns moments into memories with exceptional food and flawless service.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-amber-800 mb-2">Uncompromising Quality</h5>
                      <p className="text-amber-900/90 leading-relaxed">
                        We use only the finest local and seasonal ingredients, crafted by expert chefs for unbeatable freshness and flavor.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-amber-800 mb-2">Detail-Driven Excellence</h5>
                      <ul className="list-disc list-inside text-amber-900/90 space-y-1 pl-2">
                        <li>Stunning food presentation</li>
                        <li>Smooth, well-timed service</li>
                        <li>Feedback-focused for guest satisfaction</li>
                      </ul>
                      <p className="text-amber-900/90 mt-2 leading-relaxed">
                        Every element is tailored to impress.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-amber-100/50 p-6 rounded-lg border border-amber-200 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h3 className="text-2xl font-semibold text-amber-800 mb-4">Celebrate with Us</h3>
                <p className="text-amber-900/90 mb-4">
                  Partner with GR CELEBRATTIONS for a tasteful experience and unforgettable service. Let's create something extraordinary together.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    WhatsApp Us
                  </a>
                  <a
                  href={callLink}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <img src="/phone-call-svgrepo-com.svg" alt="Call" className="w-6 h-6" />
                    9845222522
                  </a>
                </div>
                <p className="mt-4 text-amber-800/80 text-sm">
                  Gurucharan C.G 
                </p>
              </motion.div>
            </div>
          </motion.section>
    ))
}

export default About