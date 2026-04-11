import { motion } from "framer-motion";
import { Github, ExternalLink, Zap, ArrowRight, Layers, Terminal, Database, Code2 } from "lucide-react";
import project4 from "../assets/images/project-4.png";
import project9 from "../assets/images/project-9.jpeg";
import project1 from "../assets/images/project-1.png";

const projects = [
  {
    title: "MCP Agent Framework",
    role: "System Architect",
    summary: "High-decoupled AI agent module using Hexagonal design for multi-LLM orchestration.",
    description: "Architected a highly modular backend to solve LLM lock-in. Implemented Model Context Protocol (MCP) to enable cross-provider context management and intelligent LLM routing based on task complexity.",
    impact: [
      "Achieved 99% architectural decoupling for zero-delay LLM hot-swapping.",
      "Optimized context management overhead by 40% using the MCP routing protocol.",
      "Designed a scalable 3-layer REST API following Domain-Driven Design (DDD) principles."
    ],
    tech: ["Spring Boot", "PostgreSQL", "AWS Bedrock", "Hexagonal Design"],
    image: project1,
    github: "https://github.com/Jagdish1123/mcp-Agent-framework",
    demo: "#",
    depth: "Distributed LLM Orchestration",
    icon: <Terminal size={18} />
  },
  {
    title: "SmartBudget SaaS",
    role: "ML & Backend Lead",
    summary: "Financial intelligence engine achieving 90% prediction accuracy on continuous spending forecasts.",
    description: "Engineered a production-grade budgeting engine for high-volatility spending patterns. Implemented a hybrid LSTM-ARIMA pipeline to deliver real-time financial insights with sub-100ms inference latency.",
    impact: [
      "Maintained 90% accuracy across 30-day spending forecast simulations.",
      "Reduced backend response time using FastAPI's asynchronous routing capabilities.",
      "Integrated secure financial mock protocols with multi-factor authentication (2FA) flows."
    ],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "LSTM/ARIMA"],
    image: project9,
    github: "https://github.com/Jagdish1123/Cummins_Hackathon25",
    demo: "#",
    depth: "Time-series Forecasting",
    icon: <Database size={18} />
  },
  {
    title: "CareBase Portal",
    role: "Full Stack Engineer",
    summary: "Healthcare workflow automation system with real-time patient metric anomaly detection.",
    description: "Built a centralized healthcare operational hub to optimize patient routing. Integrated isolation forest anomaly detection for automated identification of irregular patient bio-metrics in real-time.",
    impact: [
      "Real-time data synchronization using Socket.IO WebSocket streams for instant updates.",
      "Optimized write throughput using Drizzle ORM and partitioned database schemas.",
      "Engineered a responsive Kanban dashboard optimized for high-concurrency environments."
    ],
    tech: ["React", "Node.js", "Socket.IO", "Drizzle ORM"],
    image: project4,
    github: "https://github.com/Jagdish1123/CareBase-Portal",
    demo: "#",
    depth: "Real-time State Management",
    icon: <Code2 size={18} />
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
    >
      {/* Interactive Visuals */}
      <div className="flex-1 w-full group relative">
        <div className="absolute inset-0 bg-blue-500/10 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900 group-hover:border-blue-500/30 transition-all duration-700 shadow-2xl">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-[450px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
          />
          
          {/* Floating Focus Badge */}
          <div className="absolute top-8 left-8 p-5 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center gap-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
              {project.icon}
            </div>
            <div className="space-y-0.5">
              <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">In-Depth Resolution</div>
              <div className="text-sm font-bold text-white tracking-tight">{project.depth}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Architecture */}
      <div className="flex-1 space-y-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-blue-400 font-bold uppercase tracking-[0.25em] text-[10px] font-outfit">
            <Layers size={14} />
            {project.role}
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight font-outfit tracking-tight">{project.title}</h3>
        </div>

        <p className="text-slate-400 text-lg leading-relaxed font-inter">
          {project.description}
        </p>

        <div className="space-y-5">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
              Engineering Impact <span className="h-px flex-1 bg-slate-800/50" />
            </h4>
            <ul className="space-y-4">
                {project.impact.map((point, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-300 font-inter group/impact">
                        <div className="mt-1.5 p-1 rounded-full bg-blue-500/10 text-blue-500/50 group-hover/impact:text-blue-400 transition-colors">
                            <ArrowRight size={12} />
                        </div>
                        <span className="group-hover/impact:text-white transition-colors">{point}</span>
                    </li>
                ))}
            </ul>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {project.tech.map(t => (
            <span key={t} className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-slate-400 text-xs font-bold hover:text-white hover:border-blue-500/50 transition-all cursor-default">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-8 pt-4">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-white font-bold hover:text-blue-400 transition-colors group/link"
          >
            <Github size={20} className="text-slate-400 group-hover/link:text-blue-400" />
            View Architecture
          </a>
          {project.demo !== "#" && (
            <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white font-bold hover:text-blue-400 transition-colors group/link"
            >
                <ExternalLink size={20} className="text-slate-400 group-hover/link:text-blue-400" />
                Live Prototype
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-blue-600/5 blur-[160px] rounded-full -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
            Production Quality
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-outfit tracking-tight">
            Proof of <span className="text-gradient">Engineering</span>
          </h2>
          <p className="text-slate-500 max-w-3xl mx-auto text-xl leading-relaxed font-inter">
            Comprehensive deep-dives into systems engineered to solve performance bottlenecks and scalability thresholds.
          </p>
        </motion.div>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <ProjectCard key={project.title + index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}