import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Terminal,
  Database,
  Shield,
  FlaskConical,
  Rocket,
  GitBranch,
  // html,
  // Css,
  Figma,
  // Tailwind,
  Globe
} from "lucide-react";

const languages = [
  { name: "C++", icon: <Code2 className="text-blue-400" size={20} /> },
  { name: "Python", icon: <Terminal className="text-yellow-400" size={20} /> }
];

const frontend = [
  // { name: "HTML", icon: <Html className="text-orange-500" size={20} /> },
  // { name: "CSS", icon: <Css className="text-blue-500" size={20} /> },
  { name: "JavaScript", icon: <Cpu className="text-yellow-500" size={20} /> },
  { name: "Tailwind CSS", icon: <Rocket className="text-cyan-400" size={20} /> },
  { name: "React", icon: <FlaskConical className="text-blue-300" size={20} /> },
  { name: "Next.js", icon: <Globe className="text-white" size={20} /> }
];

const backend = [
  { name: "Django", icon: <Shield className="text-green-500" size={20} /> },
  { name: "Django REST", icon: <Database className="text-green-400" size={20} /> },
  { name: "Node.js", icon: <Terminal className="text-green-300" size={20} /> },
  { name: "Express", icon: <Rocket className="text-gray-300" size={20} /> },
  { name: "MongoDB", icon: <Database className="text-emerald-500" size={20} /> }
];

const tools = [
  { name: "GitHub", icon: <GitBranch className="text-purple-400" size={20} /> },
  { name: "Figma", icon: <Figma className="text-pink-400" size={20} /> }
];

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-white mb-12 text-center flex justify-center items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Code2 className="text-blue-400" size={28} />
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Terminal className="text-blue-400" size={20} />
              Introduction
            </h3>
            <p className="text-gray-300 mb-6">
              I'm a third-year Computer Science student passionate about technology, problem-solving, and innovation. 
              My expertise spans Linux, cybersecurity, and full-stack development with hands-on experience in 
              building scalable applications.
            </p>
            <p className="text-gray-300 mb-6">
              I thrive on optimizing code for efficiency and love competing in hackathons. 
              Driven by curiosity for emerging technologies, I'm committed to building impactful solutions.
            </p>
   
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Cpu className="text-blue-400" size={20} />
              Tech Stack
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-md font-medium text-gray-400 mb-3">Languages</h4>
                <div className="flex flex-wrap gap-3">
                  {languages.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center bg-gray-800/50 px-3 py-2 rounded-lg"
                    >
                      {item.icon}
                      <span className="ml-2 text-white">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-md font-medium text-gray-400 mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-3">
                  {frontend.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                      className="flex items-center bg-gray-800/50 px-3 py-2 rounded-lg"
                    >
                      {item.icon}
                      <span className="ml-2 text-white">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-md font-medium text-gray-400 mb-3">Backend</h4>
                <div className="flex flex-wrap gap-3">
                  {backend.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.4 }}
                      className="flex items-center bg-gray-800/50 px-3 py-2 rounded-lg"
                    >
                      {item.icon}
                      <span className="ml-2 text-white">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-md font-medium text-gray-400 mb-3">Tools</h4>
                <div className="flex flex-wrap gap-3">
                  {tools.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.6 }}
                      className="flex items-center bg-gray-800/50 px-3 py-2 rounded-lg"
                    >
                      {item.icon}
                      <span className="ml-2 text-white">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}