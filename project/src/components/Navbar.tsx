import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail } from "lucide-react";
import classNames from "classnames";

const navItems = [
  { label: "Home", icon: <Home size={18} />, href: "#hero" },
  { label: "About", icon: <User size={18} />, href: "#about" },
  { label: "Projects", icon: <Briefcase size={18} />, href: "#projects" },
  { label: "Contact", icon: <Mail size={18} />, href: "#contact" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: typeof navItems[0]) => {
    setActiveItem(item.label);
    const element = document.querySelector(item.href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/70 backdrop-blur-xl border-b border-gray-700/40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">

          {/* Logo */}
          <motion.a
            href="#hero"
            className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveItem("Home")}
          >
            JB
          </motion.a>

          {/* Nav Links */}
          <ul className="flex items-center gap-2 sm:gap-4 md:gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <motion.button
                  onClick={() => handleNavClick(item)}
                  className={classNames(
                    "relative px-3 py-2 sm:px-4 rounded-lg flex items-center gap-2 transition-all duration-300 text-base sm:text-lg",
                    activeItem === item.label
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  )}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                >
                  {/* Icon */}
                  <span className="text-cyan-300">{item.icon}</span>
                  <span>{item.label}</span>

                  {/* Active Underline + Glow */}
                  {activeItem === item.label && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]"
                      transition={{ type: "spring", stiffness: 250, damping: 20 }}
                    />
                  )}
                </motion.button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
