import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase,  Mail } from 'lucide-react';
import classNames from 'classnames';

const navItems = [
  { label: 'Home', icon: <Home size={20} />, href: '#hero' },
  { label: 'About', icon: <User size={20} />, href: '#about' },
  { label: 'Projects', icon: <Briefcase size={20} />, href: '#projects' },
  { label: 'Contact', icon: <Mail size={20} />, href: '#contact' },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('Home');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjust offset for active detection
      let currentActive = 'Home';

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
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

  const handleNavClick = (item) => {
    setActiveItem(item.label);
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      className={classNames(
        'fixed z-50',
        isMobile
          ? 'bottom-0 left-0 w-full bg-gray-900/95 border-t border-gray-800'
          : 'top-0 left-0 w-full bg-gray-900/90 backdrop-blur-md shadow-lg'
      )}
      initial={{ y: isMobile ? 100 : -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 25 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {!isMobile ? (
          <div className="flex items-center justify-between py-4">
            <motion.a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Home"
            >
              JB
            </motion.a>
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={classNames(
                    'relative px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300',
                    activeItem === item.label ? 'text-white' : 'text-gray-400 hover:text-white'
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={item.label}
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
                </motion.button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex justify-around items-center py-3">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={classNames(
                  'relative flex flex-col items-center p-2',
                  activeItem === item.label ? 'text-cyan-400' : 'text-gray-400'
                )}
                whileTap={{ scale: 0.9 }}
                aria-label={item.label}
              >
                {item.icon}
                <span className="text-xs mt-1">{item.label}</span>
                {activeItem === item.label && (
                  <motion.div
                    layoutId="mobileActiveTab"
                    className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 rounded-full"
                    transition={{ type: 'spring', bounce: 0.4 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
}