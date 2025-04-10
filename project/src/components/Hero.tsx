import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, Calendar, Bot, Github, Linkedin, Twitter, Award, Trophy, Star, School } from 'lucide-react';
import img from "../assets/jay.jpg";

const userData = {
  name: "Jagdish Bainade",
  currentRole: "Full Stack Developer | AI/ML Enthusiast",
  contact: {
    email: "jagdishbainade01@gmail.com",
    phone: "+91 9146314919",
    calendly: "https://calendly.com/jagdish-meeting",
    github: "https://github.com/jagdishbainade",
    linkedin: "https://linkedin.com/in/jagdishbainade",
    twitter: "https://twitter.com/jagdishbainade"
  },
  stats: {
    projects: "10+",
    internships: "3+",
  
  }
};

const achievementBadges = [
  { icon: <Star className="text-yellow-400 fill-yellow-400" size={20} />, label: "CodeChef 3-Star" },
  { icon: <Trophy className="text-amber-500 fill-amber-500/20" size={20} />, label: "Mastercard Hackathon" },
  { icon: <Award className="text-red-500 fill-red-500/20" size={20} />, label: "200-Day LeetCode Streak" },
  { icon: <School className="text-purple-500 fill-purple-500/20" size={20} />, label: "PICT 9.13 CGPA" }
];

export default function Hero() {
  return (
<section id="hero" className="min-h-screen pt-24 relative overflow-hidden bg-transparent">      {/* Particle Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/20"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated gradient background elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}  
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full filter blur-[100px] opacity-20 mix-blend-overlay animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full filter blur-[100px] opacity-20 mix-blend-overlay animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-60 h-60 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full filter blur-[100px] opacity-20 mix-blend-overlay animate-blob animation-delay-4000"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center justify-center min-h-[80vh] relative z-10">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Name with animated gradient text */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text font-montserrat tracking-tight"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          >
            {userData.name}
          </motion.h1>
          
          {/* Animated role text with multiple font styles */}
          <TypeAnimation
            sequence={[
              userData.currentRole,
              2000,
              'AI/ML Engineer',
              2000,
              'CyberSec Enthusiast',
              2000,
              'Open Source Contributor',
              2000
            ]}
            wrapper="h2"
            speed={40}
            deletionSpeed={70}
            className="text-2xl md:text-3xl font-medium mb-8"
            style={{
              background: "linear-gradient(90deg, #3b82f6, #ec4899, #06b6d4)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              display: "inline-block"
            }}
            repeat={Infinity}
          />

          {/* Stats grid with 3D effect */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {Object.entries(userData.stats).map(([key, value]) => (
              <motion.div
                key={key}
                className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-4 rounded-xl text-center backdrop-blur-md border border-gray-700/50 shadow-lg"
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">{value}</span>
                <p className="text-sm text-gray-300 mt-1 uppercase tracking-wider font-semibold">{key}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievement badges */}
          <motion.div 
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {achievementBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 bg-gray-800/50 px-3 py-2 rounded-full border border-gray-700 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {badge.icon}
                <span className="text-xs font-medium text-gray-200">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons with enhanced effects */}
          <motion.div 
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl flex items-center gap-2 hover:shadow-lg transition-all group relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center gap-2">
                <Download size={20} className="group-hover:animate-bounce" />
                <span className="font-semibold tracking-wide">Download Résumé</span>
              </span>
            </motion.a>
            
            <motion.a
              href={userData.contact.calendly}
              target="_blank"
              rel="noopener"
              className="px-6 py-3 bg-transparent border-2 border-blue-400 text-blue-400 rounded-xl flex items-center gap-2 hover:bg-blue-400/10 transition-colors group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-blue-400/5 group-hover:bg-blue-400/10 transition-colors duration-300"></span>
              <span className="relative z-10 flex items-center gap-2">
                <Calendar size={20} className="group-hover:animate-pulse" />
                <span className="font-semibold tracking-wide">Schedule Call</span>
              </span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href={userData.contact.github}
              target="_blank"
              rel="noopener"
              className="p-3 bg-gray-800/50 rounded-full backdrop-blur-sm border border-gray-700 hover:bg-gray-700/50 transition-colors"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} className="text-gray-300" />
            </motion.a>
            <motion.a
              href={userData.contact.linkedin}
              target="_blank"
              rel="noopener"
              className="p-3 bg-gray-800/50 rounded-full backdrop-blur-sm border border-gray-700 hover:bg-blue-600/20 transition-colors"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} className="text-blue-400" />
            </motion.a>
            <motion.a
              href={userData.contact.twitter}
              target="_blank"
              rel="noopener"
              className="p-3 bg-gray-800/50 rounded-full backdrop-blur-sm border border-gray-700 hover:bg-blue-400/20 transition-colors"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter size={20} className="text-cyan-400" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column - Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center relative"
        >
          <motion.div 
            className="relative w-72 h-72 md:w-96 md:h-96"
            whileHover={{ scale: 1.05 }}
          >
            {/* Floating circles decoration */}
            <motion.div
              className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 blur-xl opacity-30"
              animate={{
                y: [0, 15, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 blur-xl opacity-30"
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            
            {/* Main profile image with advanced effects */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent shadow-2xl overflow-hidden"
              animate={{
                borderColor: ["rgba(59, 130, 246, 0.3)", "rgba(168, 85, 247, 0.5)", "rgba(6, 182, 212, 0.4)", "rgba(59, 130, 246, 0.3)"],
                boxShadow: [
                  "0 0 30px rgba(59, 130, 246, 0.3)",
                  "0 0 50px rgba(168, 85, 247, 0.4)",
                  "0 0 40px rgba(6, 182, 212, 0.3)",
                  "0 0 30px rgba(59, 130, 246, 0.3)"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <motion.img
                src={img}
                alt="Jagdish Bainade"
                className="w-full h-full object-cover"
                loading="eager"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
            
            {/* Pulsating rings */}
            <motion.div
              className="absolute -inset-4 rounded-full border-2 border-blue-400/20 pointer-events-none"
              animate={{
                rotate: 360,
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute -inset-8 rounded-full border border-purple-500/20 pointer-events-none"
              animate={{
                rotate: -360,
                opacity: [0.05, 0.2, 0.05],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                delay: 2
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Chat Button with pulse animation */}
      <motion.button
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-full shadow-xl z-50 group"
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1,
          boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.7)"
        }}
        transition={{ delay: 1 }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 0 10px rgba(59, 130, 246, 0)"
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Bot size={24} className="group-hover:animate-wiggle" />
        <motion.span
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-gray-900"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>
    </section>
  );
}