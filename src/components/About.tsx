import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Cloud 
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages for Distributed Systems",
    icon: <Code2 className="text-blue-500" size={20} />,
    skills: ["Java (Spring Boot)", "Python (FastAPI/Django)", "C++ (System Programming)", "TypeScript/Node.js"]
  },
  {
    title: "Backend & Systems Arch",
    icon: <Server className="text-purple-500" size={20} />,
    skills: ["Redis (L2 Caching)", "Apache Kafka (Pub/Sub)", "PostgreSQL/MongoDB", "REST & GraphQL APIs"]
  },
  {
    title: "Cloud & Infrastructure",
    icon: <Cloud className="text-cyan-500" size={20} />,
    skills: ["AWS (EC2, S3, RDS, Bedrock)", "Docker & Kubernetes", "Terraform (IaC)", "CI/CD (GitHub Actions)"]
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical <span className="text-gradient">Skill Inventory</span></h2>
          <p className="text-slate-400 max-w-2xl text-lg uppercase tracking-widest font-bold">Specialized in High-Availability Arch</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-10"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (i * 0.05) }}
                    className="group"
                  >
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/40 border border-slate-800 group-hover:border-blue-500/30 group-hover:bg-slate-900 transition-all">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-50 group-hover:scale-150 transition-transform" />
                      <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{skill}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}