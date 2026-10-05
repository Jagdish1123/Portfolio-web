import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: "Netcracker Technology",
    role: "Junior Performance Engineer Intern",
    period: "Jun 2026 – Present",
    location: "Pune, India",
    impact: [
      "Analyzed application performance using Grafana, Prometheus, JVM profiling, and centralized logs to identify CPU, memory, thread, and response-time bottlenecks.",
      "Performed RCA for latency and system degradation using thread/heap dumps and GC logs.",
      "Optimized database performance using SQL profiling and Oracle AWR/ASH to identify expensive queries.",
      "Tested and monitored distributed microservices using Apache JMeter for scalability and availability."
    ],
    tech: ["Grafana", "Prometheus", "JVM Profiling", "JMeter", "Oracle"]
  },
  {
    company: "Rahi Platform Technologies",
    role: "Software Engineer Intern",
    period: "Jan 2026 – Jun 2026",
    location: "Pune, India",
    impact: [
      "Developed and maintained RESTful APIs for a multi-tenant SaaS Loan Origination System using Spring Boot, Hibernate, and PostgreSQL, supporting flexible client-specific workflows.",
      "Built an AI-powered OCR pipeline for KYC processing using Tesseract and AWS Bedrock, enabling automated structured data extraction and document validation with optimized image preprocessing.",
      "Improved unit and integration test coverage from 75% to 90% using TestNG and Mockito.",
      "Followed CI/CD practices using Jenkins and SonarQube to enforce code quality standards."
    ],
    tech: ["Spring Boot", "PostgreSQL", "AWS Bedrock", "Jenkins"]
  },
  {
    company: "Astraeus Next Gen Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    period: "Sep 2024 – Jan 2025",
    location: "Pune, India",
    impact: [
      "Integrated React frontend with GCP AI APIs to build a production chatbot, reducing customer support response time by 40%.",
      "Developed a real-time stock tracking engine with data visualization, handling live WebSocket streams.",
      "Engineered NLP pipelines for automated text summarization and transcription, processing 500+ documents daily with 95% accuracy."
    ],
    tech: ["React", "GCP", "Python", "WebSockets"]
  },
  {
    company: "Zoym Bioscience",
    role: "Python Developer Intern",
    period: "Oct 2024 – Nov 2024",
    location: "Remote · Pune, India",
    impact: [
      "Developed backend automation scripts and data processing pipelines using Python to streamline internal workflows.",
      "Worked on API integrations and data handling modules, improving data accuracy and reducing manual processing effort.",
      "Collaborated on building scalable and maintainable code structures following clean coding practices."
    ],
    tech: ["Python", "REST APIs", "Data Processing"]
  },
  {
    company: "PICT CyberCell",
    role: "Web Security Head",
    period: "Sep 2023 – Jul 2025",
    location: "Pune, India",
    impact: [
      "Led security audits and vulnerability assessments for college infrastructure, identifying and patching critical SQLi and XSS flaws.",
      "Mentored 50+ students in advanced web security concepts and secure coding practices.",
      "Organized security workshops increasing student engagement by 25%."
    ],
    tech: ["Penetration Testing", "Linux", "OWASP", "Burp Suite"]
  }
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    className="relative pl-12 pb-16 last:pb-0 group"
  >
    {/* Timeline Connector */}
    <div className="absolute left-[11px] top-0 bottom-0 w-px bg-slate-800 group-last:bg-transparent" />
    
    {/* Timeline Dot */}
    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center z-10 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-500">
      <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors" />
    </div>

    <div className="glass-card p-10 rounded-[2rem] hover:border-white/20 transition-all duration-500 group-hover:translate-x-2">
      <div className="flex flex-wrap justify-between items-start gap-6 mb-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">
            {exp.company}
          </div>
          <h3 className="text-3xl font-bold text-white tracking-tight">{exp.role}</h3>
          
          <div className="flex flex-wrap items-center gap-5 text-slate-500 text-sm font-medium pt-1">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-blue-500/50" /> {exp.location}</span>
            <span className="flex items-center gap-2"><Calendar size={14} className="text-purple-500/50" /> {exp.period}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 pt-1.5">
          {exp.tech.map(t => (
            <span key={t} className="px-4 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 text-slate-300 text-xs font-bold hover:bg-white/[0.08] hover:text-white transition-all cursor-default">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
          Responsibilities <span className="h-px flex-1 bg-slate-800/50" />
        </p>
        <ul className="space-y-4">
          {exp.impact.map((bullet, i) => (
            <motion.li 
              key={i} 
              className="flex items-start gap-4 text-slate-400 group/item leading-relaxed font-inter"
            >
              <div className="mt-2 shrink-0">
                <ChevronRight size={14} className="text-blue-500 group-hover/item:translate-x-1 transition-transform" />
              </div>
              <span className="group-hover/item:text-slate-200 transition-colors">{bullet}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
            Professional Journey
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-outfit">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-inter">
            My work history and professional roles.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company + index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
