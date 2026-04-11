import { motion } from "framer-motion";
import { Code2, Activity, MedalIcon, Database, Server, Zap, ArrowRight, Download } from 'lucide-react';
import img from "../assets/jay.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

const engineeringStats = [
  { 
    label: "Systems Engineered", 
    value: "12+", 
    icon: <Server size={18} />, 
    color: "blue" 
  },
  { 
    label: "Codechef 3-Star", 
    value: "1600+", 
    icon: <MedalIcon size={18} />, 
    color: "green" 
  },
  { 
    label: "LeetCode Solved", 
    value: "800+", 
    icon: <Code2 size={18} />, 
    color: "purple" 
  },
  { 
    label: "Hackathon Lead", 
    value: "Top 5%", 
    icon: <Zap size={18} />, 
    color: "amber" 
  },
];

const StatCard = ({ stat }: { stat: typeof engineeringStats[0] }) => (
  <motion.div 
    variants={itemVariants}
    className="relative p-4 rounded-2xl bg-slate-900/40 border border-white/[0.05] backdrop-blur-xl group hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className={`mb-3 p-2 w-fit rounded-xl bg-slate-800/50 group-hover:scale-110 transition-transform duration-500 text-${stat.color}-400`}>
      {stat.icon}
    </div>
    <div className="text-2xl font-bold text-white mb-0.5 tracking-tight">{stat.value}</div>
    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>
  </motion.div>
);

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full -z-10 animate-pulse pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-purple-600/10 blur-[140px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Pitch Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider mb-8 uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Turning Complex Systems into Scalable Solutions
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-[5.5rem] font-bold tracking-tight mb-6 text-white leading-[1] font-outfit"
          >
            Architecting <br />
            <span className="text-gradient">Distributed</span> <br />
            Systems
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed font-inter"
          >
            Senior Software Explorer specializing in high-availability backend architectures. 
            Designing production-grade systems with <span className="text-white font-medium underline decoration-blue-500/30 underline-offset-4">Spring Boot</span>, <span className="text-white font-medium underline decoration-purple-500/30 underline-offset-4">FastAPI</span>, and cloud-native frameworks.
          </motion.p>

          {/* Optimized Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {engineeringStats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>

          {/* Premium CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl flex items-center gap-2 shadow-xl shadow-blue-900/40 transition-all active:scale-95 group"
            >
              Verify Proof of Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-4 bg-white/[0.03] hover:bg-white/[0.08] text-white font-bold rounded-2xl border border-white/10 backdrop-blur-md transition-all active:scale-95 flex items-center gap-2"
            >
              <Download size={18} className="text-slate-400" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Visual Identity Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto group">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 rounded-[2.5rem] blur-2xl group-hover:opacity-100 transition-opacity duration-1000 opacity-50" />
            
            {/* Primary Frame */}
            <div className="relative h-full w-full rounded-[2.5rem] border border-white/10 bg-slate-900 overflow-hidden shadow-[0_0_50px_-12px_rgba(30,41,59,0.5)]">
              <img
                src={img}
                alt="Jagdish Bainade"
                className="w-full h-full object-cover filter contrast-[1.1] grayscale hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:scale-105"
              />
              
              {/* Premium Code Indicator Overlay */}
              <div className="absolute top-6 right-6">
                <div className="glass-card px-3 py-1.5 rounded-full flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold tracking-widest text-white uppercase">Backend Architect</span>
                </div>
              </div>

              {/* Dynamic Coding Micro-Terminal */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-slate-950/60 backdrop-blur-xl border border-white/10 shadow-3xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/40 ring-1 ring-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40 ring-1 ring-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/40 ring-1 ring-green-500/20" />
                </div>
                <div className="space-y-1 font-mono text-xs leading-relaxed">
                  <p><span className="text-blue-400">const</span> <span className="text-purple-400">engineer</span> = &#123;</p>
                  <p className="pl-4">core: <span className="text-yellow-200">"Architecture"</span>,</p>
                  <p className="pl-4">patterns: [<span className="text-green-300">"CQRS"</span>, <span className="text-green-300">"EDA"</span>],</p>
                  <p className="pl-4">goal: <span className="text-green-300">"Sub-200ms Latency"</span></p>
                  <p>&#125;;</p>
                </div>
              </div>
            </div>
            
            {/* Floating Achievement Badge */}
            <div className="absolute -right-4 top-1/3 p-4 rounded-2xl bg-slate-900 border border-white/10 shadow-2xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
              <MedalIcon size={24} className="text-yellow-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}