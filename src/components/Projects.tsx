import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ExternalLink, Globe, Shield, X } from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "Myday Payday - Loan Application",
      description:
        "A user-friendly loan application system for employees to apply for loans through their organizations.",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Quick and Simple Application Process: Streamline your experience with an efficient application process.",
        "Easy Access to Earned Salary: Advanced access to your earned wages before payday.",
        "Instant Approval and Credit Activation: Get immediate approval and access to your funds without delays.",
      ],
      tech: ["React", "Graphql", "Redux", "Firebase for Push Notification"],
      color: "from-blue-500 to-indigo-500",
      bgPattern:
        "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
      url: "https://play.google.com/store/apps/details?id=com.mdpd",
    },
    {
      title: "ABFFIT - Fitness Application",
      description:
        "ABFFIT is a fitness coaching platform designed to personalized training plans and progress tracking for users. The application allows users to interact with fitness coach and track their workouts",
      icon: <Globe className="w-8 h-8" />,
      features: [
        "A online coaching app created to develop your physique & fitness journey.",
        "Provided training programs, nutritions plans, consultations & much more under coach ahmed (ABFFIT) in order to help you advance in all aspects.",
      ],
      tech: [
        "React",
        "Typesscript",
        "Redux",
        "REST APIs",
        "Firebase for Push Notification",
      ],
      color: "from-emerald-500 to-teal-500",
      bgPattern:
        "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
      url: "https://apps.apple.com/us/app/abffit/id6502827816?platform=iphone",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translate(-50%, -50%) scale(${
                Math.random() * 0.5 + 0.5
              })`,
              filter: "blur(40px)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div
                  className="relative rounded-2xl overflow-hidden bg-gray-800 h-full transform-gpu transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-700"
                  style={{ background: project.bgPattern }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative p-8">
                    <div className="mb-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white mb-4`}
                      >
                        {project.icon}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-xs text-white font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-6">
                      {/* <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className="flex items-center gap-2 bg-gray-700/50 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </motion.a> */}
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className={`flex items-center gap-2 bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-lg transition-transform text-sm`}
                        onClick={() => window.open(project.url)}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Application Link</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
              style={{ background: selectedProject.bgPattern }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedProject.color} flex items-center justify-center text-white mb-6`}
                >
                  {selectedProject.icon}
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech: any, idx: number) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 bg-gradient-to-r ${selectedProject.color} rounded-full text-sm text-white font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h4 className="text-xl font-semibold text-white mb-4">
                  Key Features
                </h4>
                <ul className="space-y-3 mb-8">
                  {selectedProject.features.map((feature: any, idx: number) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <ArrowRight className="w-5 h-5 mt-1 text-blue-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className={`flex items-center gap-2 bg-gradient-to-r ${selectedProject.color} text-white px-6 py-3 rounded-lg transition-transform`}
                    onClick={() => window.open(selectedProject.url)}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Application Link</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
