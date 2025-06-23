import { motion } from "framer-motion";
import { 
  Github, 
  ExternalLink,
  Code2,
  Cpu,
  Terminal,
  Database,
  Shield,
  FlaskConical,
  Rocket,
  GitBranch,
  Globe
} from "lucide-react";
import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.png";
import project6 from "../assets/images/project-6.png";
import project7 from "../assets/images/project-7.jpg";
import project8 from "../assets/images/project-8.png";

const projects = [
  {
    title: "Movie App",
    description: "A sleek movie browsing app with dynamic content and UI.",
    image: project1,
    tech: [
      { name: "React", icon: <FlaskConical className="text-blue-300" size={16} /> },
      { name: "TMDB API", icon: <Database className="text-emerald-500" size={16} /> },
      { name: "Tailwind CSS", icon: <Rocket className="text-cyan-400" size={16} /> }
    ],
    demo: "https://movie-app-pi-weld.vercel.app/",
    github: "https://github.com/Jagdish1123/Movie_app"
  },
  {
    title: "CareBase Portal",
    description: "A healthcare portal designed for managing medical data and user interaction.",
    image: project4,
    tech: [
      { name: "React", icon: <FlaskConical className="text-blue-300" size={16} /> },
      { name: "Firebase", icon: <Shield className="text-green-500" size={16} /> },
      { name: "Tailwind CSS", icon: <Rocket className="text-cyan-400" size={16} /> }
    ],
    demo: "https://github.com/Jagdish1123/CareBase-Portal",
    github: "https://github.com/Jagdish1123/CareBase-Portal"
  },
  {
    title: "Cybercell Website",
    description: "An informative cybersecurity website built for awareness and reporting.",
    image: project7,
    tech: [
      { name: "Next.js", icon: <Globe className="text-white" size={16} /> },
      { name: "CSS Modules", icon: <Code2 className="text-blue-400" size={16} /> },
      { name: "Vercel", icon: <Rocket className="text-gray-300" size={16} /> }
    ],
    demo: "https://cyber-web-ten.vercel.app/home",
    github: "https://github.com/Jagdish1123/PICT_Cybercell"
  },
  {
    title: "IMDb Clone",
    description: "Clone of IMDb with movie details, ratings, and browsing functionality.",
    image: project2,
    tech: [
      { name: "React", icon: <FlaskConical className="text-blue-300" size={16} /> },
      { name: "Redux", icon: <Cpu className="text-yellow-500" size={16} /> },
      { name: "REST API", icon: <Database className="text-green-400" size={16} /> }
    ],
    demo: "https://imdb-bfht.vercel.app/",
    github: "https://github.com/Jagdish1123/IMDB"
  },
  {
    title: "Weather App",
    description: "Real-time weather updates using OpenWeatherMap API.",
    image: project6,
    tech: [
      { name: "JavaScript", icon: <Cpu className="text-yellow-500" size={16} /> },
      { name: "HTML", icon: <Code2 className="text-orange-500" size={16} /> },
      { name: "CSS", icon: <Code2 className="text-blue-500" size={16} /> }
    ],
    demo: "https://github.com/Jagdish1123/Weather_App",
    github: "https://github.com/Jagdish1123/Weather_App"
  },
  {
    title: "Y4D (NGO Website)",
    description: "Website for Y4D NGO, designed to manage events and donations.",
    image: project3,
    tech: [
      { name: "React", icon: <FlaskConical className="text-blue-300" size={16} /> },
      { name: "Tailwind CSS", icon: <Rocket className="text-cyan-400" size={16} /> },
      { name: "Vercel", icon: <Rocket className="text-gray-300" size={16} /> }
    ],
    demo: "https://ngo-frontend-gray.vercel.app/",
    github: ""
  },
  {
    title: "E-commerce Website",
    description: "Frontend for a functional e-commerce shopping website.",
    image: project8,
    tech: [
      { name: "HTML", icon: <Code2 className="text-orange-500" size={16} /> },
      { name: "CSS", icon: <Code2 className="text-blue-500" size={16} /> },
      { name: "JavaScript", icon: <Cpu className="text-yellow-500" size={16} /> }
    ],
    demo: "https://jagdish1123.github.io/E_commerce-Website/",
    github: "https://github.com/Jagdish1123/E_commerce-Website"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-extrabold text-white mb-12 text-center flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Code2 className="text-blue-400" size={28} />
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-400/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <motion.span 
                      key={i}
                      className="px-3 py-1 bg-gray-700/50 text-white rounded-full text-sm flex items-center gap-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech.icon}
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    <ExternalLink size={20} />
                    <span className="font-medium">Demo</span>
                  </motion.a>
                  {project.github && (
                    <motion.a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      <Github size={20} />
                      <span className="font-medium">Code</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}