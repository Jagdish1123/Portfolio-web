import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail } from 'lucide-react';
import classNames from 'classnames';

const navItems = [
  { label: 'Home', icon: <Home size={20} />, href: '#hero' },
  { label: 'About', icon: <User size={20} />, href: '#about' },
  { label: 'Projects', icon: <Briefcase size={20} />, href: '#projects' },
  { label: 'Contact', icon: <Mail size={20} />, href: '#contact' },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let currentActive = 'Home';
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentActive = item.label;
          }
        }
      });
      setActiveItem(currentActive);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: typeof navItems[0]) => {
    setActiveItem(item.label);
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md shadow-lg"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <motion.a
            href="#hero"
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Home"
            onClick={() => setActiveItem('Home')}
          >
            JB
          </motion.a>
          <ul className="flex items-center gap-2 sm:gap-4 md:gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <motion.a
                  href={item.href}
                  onClick={() => handleNavClick(item)}
                  className={classNames(
                    'relative px-3 py-2 sm:px-4 rounded-lg flex items-center gap-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 text-base sm:text-lg',
                    activeItem === item.label ? 'text-white' : 'text-gray-400 hover:text-white'
                  )}
                  aria-label={item.label}
                  aria-current={activeItem === item.label ? 'page' : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {activeItem === item.label && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}