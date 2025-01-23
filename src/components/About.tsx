import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutImg from "../assets/Santhosh.jpg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/3"
            >
              <img
                src={AboutImg}
                alt="Santhosh Kumar M"
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:w-2/3"
            >
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I am a passionate and skilled React Native Developer with over 2
                years of professional experience in building responsive and
                dynamic mobile applications. My expertise lies in JavaScript
                (ES6+), React.js, Redux, and RESTful APIs, and I thrive in
                collaborative environments that demand innovative
                problem-solving and scalable solutions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                I am committed to writing clean, efficient code while
                continuously staying updated with emerging technologies to
                deliver cutting-edge applications. My focus is on creating
                user-friendly interfaces that provide exceptional experiences
                while maintaining high performance and scalability.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
