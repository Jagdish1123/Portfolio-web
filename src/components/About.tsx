import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Maximize2, X, Minus } from "lucide-react";

type Command = {
  cmd: string;
  output: React.ReactNode;
};

const COMMANDS = {
  "whoami": (
    <div className="space-y-2 py-2">
      <div className="text-2xl font-bold text-white tracking-tight">Jagdish Bainade</div>
      <div className="text-blue-400 font-bold">Software & Performance Engineer</div>
      <div className="text-slate-400 max-w-2xl text-base leading-relaxed">
        Passionate about distributed systems, performance optimization, and robust backend architecture. Building scalable products that can handle massive concurrency.
      </div>
    </div>
  ),
  "cat skills.txt": (
    <div className="py-2">
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-y-4 gap-x-6 text-base">
        <span className="text-cyan-400 font-bold tracking-widest">LANGUAGES</span>
        <span className="text-slate-300 font-mono">Java, Go, C++, Python, TypeScript</span>
        
        <span className="text-purple-400 font-bold tracking-widest">BACKEND</span>
        <span className="text-slate-300 font-mono">Spring Boot, FastAPI, Node.js</span>
        
        <span className="text-emerald-400 font-bold tracking-widest">DATABASES</span>
        <span className="text-slate-300 font-mono">PostgreSQL, MongoDB, Redis, Oracle DB</span>
        
        <span className="text-orange-400 font-bold tracking-widest">INFRASTRUCTURE</span>
        <span className="text-slate-300 font-mono">Kubernetes, Docker, AWS, Jenkins</span>
      </div>
    </div>
  ),
  "contact": (
    <div className="space-y-4 py-2 text-base">
      <div className="text-white font-bold mb-4">Let's connect and build something scalable.</div>
      <div className="flex flex-col gap-3 font-mono">
        <a href="mailto:jagdishbainade01@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors w-fit">
          <span className="text-cyan-400 font-bold w-24">EMAIL:</span>
          jagdishbainade01@gmail.com
        </a>
        <a href="https://github.com/Jagdish1123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-purple-400 transition-colors w-fit">
          <span className="text-purple-400 font-bold w-24">GITHUB:</span>
          github.com/Jagdish1123
        </a>
        <a href="https://linkedin.com/in/jagdishbainade" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors w-fit">
          <span className="text-emerald-400 font-bold w-24">LINKEDIN:</span>
          linkedin.com/in/jagdishbainade
        </a>
      </div>
    </div>
  )
};

export default function About() {
  const [history, setHistory] = useState<Command[]>([
    { 
      cmd: "", 
      output: (
        <div className="text-slate-400 mb-4 text-base">
          Welcome to JagdishOS v1.0.0<br/>
          Type a command or click the buttons below to execute.
        </div>
      ) 
    }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  const runCommand = (cmd: string) => {
    if (cmd === "clear") {
      setHistory([{ cmd: "", output: <div className="text-slate-500 italic">Terminal cleared.</div> }]);
      return;
    }
    
    const output = COMMANDS[cmd as keyof typeof COMMANDS] || <div className="text-red-400">command not found: {cmd}</div>;
    setHistory(prev => [...prev, { cmd, output }]);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
            Interactive Bio
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-outfit tracking-tight">
            System <span className="text-gradient">Terminal</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl">Execute commands to view my system specs.</p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-950/60 backdrop-blur-3xl shadow-[0_0_80px_-15px_rgba(56,189,248,0.15)] ring-1 ring-white/10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-900/80 border-b border-slate-800/80 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
              <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm font-mono bg-slate-950/50 px-4 py-1 rounded-md border border-slate-800">
              <Terminal size={14} className="text-blue-400" />
              <span>jagdish@portfolio:~</span>
            </div>
            <div className="flex items-center gap-4 text-slate-500">
              <Minus size={16} className="hover:text-white transition-colors cursor-pointer" />
              <Maximize2 size={16} className="hover:text-white transition-colors cursor-pointer" />
              <X size={16} className="hover:text-red-400 transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Body */}
          <div className="p-8 font-mono text-base md:text-lg h-[500px] overflow-y-auto flex flex-col scroll-smooth">
            {history.map((item, index) => (
              <div key={index} className="mb-6">
                {item.cmd && (
                  <div className="flex items-center gap-3 mb-3 text-lg">
                    <span className="text-green-400 font-bold">jagdish@portfolio</span>
                    <span className="text-slate-500">:</span>
                    <span className="text-blue-400 font-bold">~</span>
                    <span className="text-slate-500">$</span>
                    <span className="text-white font-medium">{item.cmd}</span>
                  </div>
                )}
                <div className="text-slate-300">
                  {item.output}
                </div>
              </div>
            ))}
            {/* Blinking Cursor */}
            <div className="flex items-center gap-3 mt-4 text-lg">
              <span className="text-green-400 font-bold">jagdish@portfolio</span>
              <span className="text-slate-500">:</span>
              <span className="text-blue-400 font-bold">~</span>
              <span className="text-slate-500">$</span>
              <span className="w-3 h-5 bg-slate-400 animate-pulse" />
            </div>
            <div ref={bottomRef} />
          </div>

          {/* Footer / Controls */}
          <div className="px-8 py-5 bg-slate-900/80 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
            <span className="text-slate-500 font-mono text-sm uppercase tracking-widest font-bold mr-2">Quick Execute:</span>
            {["whoami", "cat skills.txt", "contact", "clear"].map(cmd => (
              <button
                key={cmd}
                onClick={() => runCommand(cmd)}
                className="px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 hover:border-blue-400/50 text-sm font-mono font-bold transition-all active:scale-95 shadow-[0_0_15px_-3px_rgba(56,189,248,0.1)] hover:shadow-[0_0_20px_-3px_rgba(56,189,248,0.3)]"
              >
                {cmd}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}