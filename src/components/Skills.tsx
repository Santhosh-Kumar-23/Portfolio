import { motion } from "framer-motion";
import { Database, Layout, PenTool as Tool } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "React native",
        "HTML5",
        "CSS3",
      ],
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "State Management & APIs",
      icon: <Database className="w-6 h-6" />,
      skills: ["Redux", "Context API", "RESTful APIs", "GraphQL"],
      color: "from-emerald-500 to-teal-500",
    },

    {
      title: "Build Tools",
      icon: <Tool className="w-6 h-6" />,
      skills: ["npm", "Yarn"],
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateZ: 2 }}
                className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-1"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-20 blur-xl"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${category.color})`,
                  }}
                />

                <div className="relative bg-gray-900 rounded-lg p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + idx * 0.1,
                        }}
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1 bg-gradient-to-r ${category.color} rounded-full text-sm text-white font-medium shadow-lg`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
