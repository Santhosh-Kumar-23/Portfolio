import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Calendar } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: "Colan Infotech Pvt Ltd",
      position: "React Native Developer",
      period: "AUG 2024 – Present",
      color: "from-blue-500 to-indigo-500",
      responsibilities: [
        "Skilled in managing global state using Redux, Redux Toolkit, and Context API, ensuring efficient state management, scalable application architecture, and seamless integration with React and React Native applications.",
        "Integrated push notification handling in a React Native application using React Native Push Notification and Firebase Cloud Messaging (FCM) to manage notifications across foreground, background, and kill states.",
        "Configured notification redirection for app navigation based on the app state (foreground, background, kill state) to provide users with context-aware notifications.",
        "Skilled in creating Higher-Order Components (HOCs) and functions for reusability and modularity.",
        "Implemented GraphQL in a React Native application using Apollo Client to manage queries, mutations.",
        "Implemented biometric authentication (Face ID, Touch ID, and fingerprint) in React Native applications to enhance security and provide a seamless user experience.",
      ],
    },
    {
      company: "Techno Genesis Software Solutions Pvt Ltd",
      position: "React Native Developer",
      period: "AUG 2022 –  2023",
      color: "from-purple-500 to-pink-500",
      responsibilities: [
        "Created custom hooks to encapsulate reusable logic, improving code maintainability, reducing redundancy, and enhancing code readability.",
        "Implemented offline storage using AsyncStorage in React Native to persist user data and settings across app sessions.",
        "Collaborated with backend teams to integrate RESTful APIs, ensuring smooth data exchange.",
        "Reduced application load times by optimizing performance through lazy loadin",
        "Experienced in integrating and managing RESTful APIs using Fetch API and Axios",
        "Expert in building complete app UIs with responsive layouts, smooth navigation, and userfriendly designs using React Native and third-party libraries.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Work Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500" />

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex flex-col md:flex-row gap-8 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6">
                      <div
                        className={`w-full h-full rounded-full bg-gradient-to-r ${exp.color} shadow-lg`}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 md:w-1/2">
                      <div className="relative p-8 bg-gray-800 rounded-2xl overflow-hidden group hover:shadow-2xl transition-shadow">
                        {/* Gradient Background */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                        />

                        <div className="relative">
                          <div className="flex items-center gap-4 mb-4">
                            <div
                              className={`p-3 rounded-xl bg-gradient-to-br ${exp.color}`}
                            >
                              <Briefcase className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                {exp.position}
                              </h3>
                              <p className="text-blue-400">{exp.company}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mb-6 text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>

                          <ul className="space-y-3">
                            {exp.responsibilities.map((resp, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{
                                  duration: 0.4,
                                  delay: index * 0.1 + idx * 0.1,
                                }}
                                className="flex items-start gap-3 text-gray-300 group/item"
                              >
                                <ArrowRight className="w-4 h-4 mt-1.5 text-blue-400 group-hover/item:translate-x-1 transition-transform" />
                                <span className="text-sm">{resp}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
