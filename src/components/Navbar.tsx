import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Zap, Mail, Cpu, Terminal } from "lucide-react";

const navItems = [
  { label: "Home", icon: <Home size={16} />, href: "#hero" },
  { label: "Experience", icon: <Briefcase size={16} />, href: "#experience" },
  { label: "Projects", icon: <Terminal size={16} />, href: "#projects" },
  { label: "Architecture", icon: <Cpu size={16} />, href: "#engineering-depth" },
  { label: "Skills", icon: <Zap size={16} />, href: "#about" },
  { label: "Contact", icon: <Mail size={16} />, href: "#contact" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const scrollPosition = window.scrollY + 150;
      let currentActive = "Home";

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentActive = item.label;
          }
        }
      });
      setActiveItem(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className={`flex items-center justify-between px-6 py-2 rounded-full border transition-all duration-500 shadow-2xl ${
            isScrolled 
              ? "bg-slate-900/80 backdrop-blur-xl border-white/10" 
              : "bg-transparent border-transparent shadow-none"
          }`}
        >
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-600/20 group-hover:bg-blue-500 transition-colors">
              JB
            </div>
            <span className="hidden sm:block text-white font-bold tracking-tight text-lg font-outfit">
              Jagdish<span className="text-blue-500">.</span>
            </span>
          </motion.button>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 rounded-full text-sm font-bold tracking-tight transition-all duration-300 flex items-center gap-2 ${
                    activeItem === item.label
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {activeItem === item.label && (
                    <motion.div
                      layoutId="navGlow"
                      className="absolute inset-0 bg-blue-500/10 rounded-full border border-blue-500/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className={activeItem === item.label ? "text-blue-400" : "text-slate-500"}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Links */}
          <div className="lg:hidden flex items-center gap-4">
             <button
               onClick={() => scrollToSection("#contact")}
               className="px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-full hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-600/20"
             >
               Hire Me
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
