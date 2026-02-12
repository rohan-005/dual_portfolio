/* eslint-disable no-unused-vars */
// src/components/sections/HeroSection.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HeroSection = ({ hero, name, retroEffects, accentColors, isGameDev }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const typeRole = () => {
      const role = hero.typingRoles[currentRoleIndex];
      let charIndex = 0;
      
      const type = () => {
        if (charIndex <= role.length) {
          setDisplayText(role.substring(0, charIndex));
          charIndex++;
          timeout = setTimeout(type, 80);
        } else {
          setIsTyping(false);
          timeout = setTimeout(() => {
            setIsTyping(true);
            setCurrentRoleIndex((prev) => (prev + 1) % hero.typingRoles.length);
          }, 2000);
        }
      };
      
      type();
      
      return () => clearTimeout(timeout);
    };
    
    typeRole();
  }, [currentRoleIndex, hero.typingRoles]);

  return (
    <section className="min-h-screen flex items-center justify-center relative py-20 overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className={`absolute top-20 right-10 w-64 h-64 bg-${accentColors.primary}/10 rounded-full blur-3xl`}
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div 
        className={`absolute bottom-20 left-10 w-96 h-96 bg-${accentColors.secondary}/10 rounded-full blur-3xl`}
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Doodle Illustration with animation */}
      <motion.div 
        className="absolute top-20 right-10 opacity-30 dark:opacity-40"
        animate={{ 
          rotate: [0, 5, -5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <svg width="120" height="120" viewBox="0 0 100 100" className={`text-${accentColors.primary}`}>
          {isGameDev ? (
            // Game controller doodle
            <>
              <rect x="20" y="35" width="60" height="30" rx="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="35" cy="50" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="65" cy="50" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="45" y1="50" x2="55" y2="50" stroke="currentColor" strokeWidth="2" />
              <line x1="50" y1="45" x2="50" y2="55" stroke="currentColor" strokeWidth="2" />
            </>
          ) : (
            // Code brackets doodle
            <>
              <path d="M30,40 L15,50 L30,60" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M70,40 L85,50 L70,60" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="45" y1="30" x2="55" y2="70" stroke="currentColor" strokeWidth="2" />
            </>
          )}
        </svg>
      </motion.div>

      <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: -50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            damping: 15
          }}
          className="mb-6"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 font-mono"
            animate={{ 
              textShadow: [
                `0 0 20px rgba(var(--${accentColors.primary}), 0)`,
                `0 0 30px rgba(var(--${accentColors.primary}), 0.3)`,
                `0 0 20px rgba(var(--${accentColors.primary}), 0)`
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {name}
          </motion.h1>
          <div className="flex items-center justify-center space-x-2 text-xl md:text-2xl">
            <motion.span 
              className={`text-${accentColors.primary}`}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {isGameDev ? '🎮' : '💻'}
            </motion.span>
            <span className={`text-${accentColors.primary} dark:text-${accentColors.secondary}`}>
              {hero.title}
            </span>
          </div>
        </motion.div>

        <motion.div 
          className="text-2xl md:text-3xl font-mono mb-8 h-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className={`text-${accentColors.primary}`}>&lt;</span>
          <motion.span 
            className="mx-2 inline-block"
            animate={isTyping ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            {displayText}
          </motion.span>
          {retroEffects && (
            <motion.span 
              className={`terminal-cursor text-${accentColors.primary}`}
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              _
            </motion.span>
          )}
          <span className={`text-${accentColors.secondary} ml-2`}>/&gt;</span>
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {hero.subtitle}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className={`w-6 h-10 border-2 border-${accentColors.primary} rounded-full flex justify-center`}>
            <motion.div 
              className={`w-1 h-3 bg-${accentColors.primary} rounded-full mt-2`}
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;