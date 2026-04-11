import { motion } from 'framer-motion';
import { 
  Server, 
  ShieldCheck, 
  Cloud, 
  ArrowUpRight,
  Zap,
  Globe,
  Cpu
} from 'lucide-react';

const depthTopics = [
  {
    title: "System Design & Scalability",
    description: "Designing for 10k+ concurrent users with high-throughput backend services.",
    icon: <Server className="text-blue-400" size={24} />,
    points: [
      "Microservices orchestration with Kubernetes",
      "Event-driven architecture using Apache Kafka",
      "Multi-level caching strategies (Redis L2)",
      "Horizontal scaling & Nginx Load Balancing"
    ],
    accent: "blue"
  },
  {
    title: "Security & Resilience",
    description: "Ensuring zero-trust security and data integrity across the pipeline.",
    icon: <ShieldCheck className="text-emerald-400" size={24} />,
    points: [
      "OWASP Top 10 mitigation strategies",
      "Identity Management with Auth0/JWT",
      "Secure API Gateways & Rate Limiting",
      "TLS 1.3 Encryption & Secure Headers"
    ],
    accent: "emerald"
  },
  {
    title: "Cloud & Reliability",
    description: "Leveraging cloud-native tools for 99.9% uptime and reliability.",
    icon: <Cloud className="text-cyan-400" size={24} />,
    points: [
      "IaC using Terraform & CloudFormation",
      "Automated CI/CD with GitHub Actions",
      "AWS Resource Optimization (EC2/S3)",
      "Dockerization & Micro-segmentation"
    ],
    accent: "cyan"
  }
];

const DepthCard = ({ topic, index }: { topic: typeof depthTopics[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    className="group relative h-full"
  >
    {/* Animated Card Border Glow */}
    <div className={`absolute -inset-px rounded-[2rem] bg-gradient-to-br from-${topic.accent}-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
    
    <div className="relative h-full glass-card p-10 rounded-[2rem] border border-white/5 bg-slate-900/60 transition-all duration-500 group-hover:border-white/10 group-hover:-translate-y-2">
      <div className={`mb-10 p-5 rounded-[1.25rem] bg-${topic.accent}-500/5 border border-${topic.accent}-500/10 w-fit group-hover:scale-110 transition-transform duration-700`}>
        {topic.icon}
      </div>
      
      <div className="space-y-4 mb-8">
        <h3 className="text-2xl font-bold text-white tracking-tight flex items-center justify-between group/h">
          {topic.title}
          <ArrowUpRight size={20} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed font-inter">
          {topic.description}
        </p>
      </div>

      <ul className="space-y-4">
        {topic.points.map((point, i) => (
          <li key={i} className="flex items-start gap-4 text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed font-inter">
            <div className={`w-1.5 h-1.5 rounded-full bg-${topic.accent}-500/50 mt-2 shrink-0 group-hover:scale-125 transition-transform`} />
            <span className="text-sm font-medium">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default function EngineeringDepth() {
  return (
    <section id="engineering-depth" className="py-32 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-600/5 blur-[120px] rounded-full -z-10 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
            System Insights
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-outfit">
            Engineering <span className="text-gradient">Depth</span>
          </h2>
          <p className="text-slate-500 max-w-2xl text-lg leading-relaxed font-inter">
            Designing systems that transcend code—focusing on high-availability, adaptive reliability, and robust cloud scaling.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {depthTopics.map((topic, index) => (
            <DepthCard key={topic.title + index} topic={topic} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
