import { motion } from "framer-motion";
import { ChevronDown, Download, Linkedin, MapPin, Phone } from "lucide-react";
import Resume from "../assets/UpdatedResume.pdf";
import AboutImg from "../assets/react.png";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gray-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4}px`,
                height: `${Math.random() * 4}px`,
                animation: `twinkle ${Math.random() * 5 + 3}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-6 md:px-12 h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Hi, I'm Santhosh Kumar
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
                React Native Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-400 text-sm sm:text-lg mb-6 max-w-md mx-auto lg:mx-0"
            >
              Passionate about creating responsive and dynamic mobile
              applications with over 2 years of professional experience.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6"
            >
              <button
                onClick={() => window.open(Resume)}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                <Download className="w-5 h-5" />
                <span>Resume</span>
              </button>
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors text-sm sm:text-base"
              >
                <span>View Projects</span>
              </a>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start text-gray-400 text-sm"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+919360147391" className="hover:text-blue-400">
                  +91 9597654585
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Madurai, India</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-4 mt-6 justify-center lg:justify-start"
            >
              {/* <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Santhosh-Kumar-23"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700"
              >
                <Github className="w-6 h-6" />
              </motion.a> */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/m-santhosh-kumar-365b52244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" />
              <img
                src={AboutImg}
                alt="Santhosh Kumar M"
                className="relative rounded-3xl w-full h-full object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-3xl border-2 border-white/10" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </div>

      <style>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
