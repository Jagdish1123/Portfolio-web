import { motion } from "framer-motion";
import { Github, ExternalLink, Zap, ArrowRight, Layers, Terminal, Database, Code2, ShieldAlert, Activity } from "lucide-react";
import k8sImg from "../assets/images/kubernetes_visualizer_dashboard_1789741947663.jpg";
import telecomImg from "../assets/images/telecom_billing_architecture_1789742033115.jpg";
import mcpImg from "../assets/images/mcp_agent_framework_1789742049450.jpg";
import smartbudgetImg from "../assets/images/smartbudget_financial_dashboard_1789742064458.jpg";
import carebaseImg from "../assets/images/carebase_portal_dashboard_1789742080264.jpg";

const projects = [
  {
    title: "Kubernetes Visualizer",
    role: "Software Engineer",
    summary: "Real-time Kubernetes dashboard to visualize microservice topology and cluster health.",
    description: "Built a real-time Kubernetes dashboard using Go, React Flow, and WebSockets to visualize microservice topology, traffic flows, and cluster health.",
    impact: [
      "Engineered zero-polling monitoring with client-go Informers.",
      "Built WebSocket streaming engine with Gorilla WebSockets for pod logs, events, metrics, and state changes.",
      "Integrated browser-based xterm.js for direct Kubernetes exec access."
    ],
    tech: ["Go", "React", "WebSockets", "Client-Go", "PromQL"],
    image: k8sImg,
    github: "https://github.com/Jagdish1123/kubernetes-visualization",
    demo: "#",
    depth: "System Observability",
    icon: <Activity size={18} />
  },
  {
    title: "Telecom Billing Platform",
    role: "Software Engineer",
    summary: "Fault-tolerant billing platform combining Spring Boot and Node.js services.",
    description: "Architected a fault-tolerant billing platform on Kubernetes, with Envoy API Gateway for traffic management.",
    impact: [
      "Implemented rate limiting, bulkheads, circuit breaking, and retry patterns using Envoy and Resilience4j.",
      "Developed idempotent APIs for reliable transaction processing.",
      "Validated system resilience under K6 load tests at 200 req/sec, using OpenTelemetry, Jaeger, and Grafana."
    ],
    tech: ["Spring Boot", "Node.js", "Envoy", "Kubernetes", "PostgreSQL"],
    image: telecomImg,
    github: "https://github.com/Jagdish1123/telecom-billing-platform",
    demo: "#",
    depth: "Resiliency Engineering",
    icon: <ShieldAlert size={18} />
  },
  {
    title: "MCP Agent Framework",
    role: "Software Engineer",
    summary: "AI agent framework with Spring Boot for multi-LLM integration.",
    description: "Built an AI agent framework with Spring Boot for multi-LLM integration, using Hexagonal Architecture.",
    impact: [
      "Built an AI agent framework with Spring Boot for multi-LLM integration.",
      "Implemented Model Context Protocol (MCP) for context management and request routing.",
      "Developed modular 3-layer REST APIs using Domain-Driven Design for scalable agent services."
    ],
    tech: ["Spring Boot", "PostgreSQL", "AWS Bedrock", "Hexagonal Design"],
    image: mcpImg,
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
    image: smartbudgetImg,
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
    image: carebaseImg,
    github: "https://github.com/Jagdish1123/CareBase-Portal",
    demo: "#",
    depth: "Real-time State Management",
    icon: <Code2 size={18} />
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card p-10 rounded-[2rem] hover:border-white/20 transition-all duration-500 group"
    >
      <div className="flex flex-col space-y-8">
        {/* Header: Title and Tech Tags */}
        <div className="flex flex-wrap justify-between items-start gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-4 text-blue-400 font-bold uppercase tracking-[0.25em] text-[10px] font-outfit mb-1">
              <div className="flex items-center gap-1.5">
                <Layers size={14} />
                {project.role}
              </div>
              <div className="flex items-center gap-1.5 text-slate-500">
                {project.icon}
                {project.depth}
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white tracking-tight">{project.title}</h3>
          </div>

          <div className="flex flex-wrap gap-2 pt-1.5 max-w-[300px] justify-end">
            {project.tech.map(t => (
              <span key={t} className="px-3 py-1 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 text-[10px] font-bold">
                {t}
              </span>
            ))}
          </div>
        </div>

        <p className="text-slate-400 text-sm md:text-base leading-relaxed font-inter">
          {project.description}
        </p>

        <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
              Key Features <span className="h-px flex-1 bg-slate-800/50" />
            </h4>
            <ul className="space-y-3">
                {project.impact.map((point, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-400 group-hover:text-slate-300 font-inter text-sm md:text-base leading-relaxed">
                        <div className="mt-1.5 shrink-0">
                            <ArrowRight size={14} className="text-blue-500/50 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                        </div>
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>

        <div className="flex gap-8 pt-4">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-white font-bold text-sm hover:text-blue-400 transition-colors group/link"
          >
            <Github size={18} className="text-slate-400 group-hover/link:text-blue-400" />
            View GitHub
          </a>
          {project.demo !== "#" && (
            <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white font-bold text-sm hover:text-blue-400 transition-colors group/link"
            >
                <ExternalLink size={18} className="text-slate-400 group-hover/link:text-blue-400" />
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
          className="mb-24 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
            Portfolio
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-outfit tracking-tight">
            Key <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-inter">
            A selection of my recent software engineering and systems architecture projects.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title + index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}