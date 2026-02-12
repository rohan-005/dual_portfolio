/* eslint-disable no-unused-vars */
// src/components/LandingSplit.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const LandingSplit = ({ profiles, onSelect, retroEffects }) => {
  const [hoveredSide, setHoveredSide] = useState(null);
  const [selectedSide, setSelectedSide] = useState(null);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    initial: { y: 100, opacity: 0, rotate: -5 },
    animate: { 
      y: 0, 
      opacity: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80
      }
    }
  };

  const handleClick = (profileId) => {
    setSelectedSide(profileId);
    setTimeout(() => {
      onSelect(profileId);
    }, 400);
  };

  return (
    <motion.div 
      className="flex flex-col md:flex-row h-screen w-full overflow-hidden"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Game Developer Panel - green/Green Theme */}
      <motion.div
        className="relative flex-1 cursor-pointer group overflow-hidden"
        variants={itemVariants}
        whileHover={{ flex: 1.2 }}
        transition={{ duration: 0.4 }}
        onHoverStart={() => setHoveredSide('game')}
        onHoverEnd={() => setHoveredSide(null)}
        onClick={() => handleClick('gameDeveloper')}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 via-game-green-600/80 to-green-700/90" />
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* CRT Flicker Effect */}
        {retroEffects && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-game-green-500/10 to-transparent"
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 0.1, repeat: Infinity, repeatType: 'reverse' }}
          />
        )}
        
        {/* Scanline Overlay */}
        {retroEffects && (
          <div className="absolute inset-0 bg-pixel-grid dark:bg-pixel-grid-dark bg-grid opacity-20" />
        )}
        
        {/* Animated border */}
        <motion.div 
          className="absolute inset-0 border-4 border-green-400 opacity-0 group-hover:opacity-100"
          animate={hoveredSide === 'game' ? { 
            scale: [1, 1.02, 1],
            borderColor: ['#FF8C42', '#4CAF50', '#FF8C42']
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 text-white">
          <motion.div
            animate={hoveredSide === 'game' ? { 
              scale: 1.1,
              x: -10,
              y: -10,
              rotate: -5
            } : { scale: 1, x: 0, y: 0, rotate: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="text-center"
          >
            <motion.div 
              className="mb-6 relative"
              animate={{ 
                rotate: hoveredSide === 'game' ? 360 : 0,
                scale: hoveredSide === 'game' ? [1, 1.2, 1] : 1
              }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <span className="text-7xl md:text-8xl block animate-float">🎮</span>
              <motion.div 
                className="absolute -inset-4 bg-green-500/30 blur-xl rounded-full"
                animate={{ 
                  opacity: hoveredSide === 'game' ? 0.8 : 0.2,
                  scale: hoveredSide === 'game' ? 1.5 : 1
                }}
              />
              <motion.div 
                className="absolute -inset-6 bg-game-green-500/20 blur-2xl rounded-full"
                animate={{ 
                  opacity: hoveredSide === 'game' ? 0.6 : 0.1,
                  scale: hoveredSide === 'game' ? 1.8 : 1
                }}
              />
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-4 font-mono"
              animate={hoveredSide === 'game' ? { 
                textShadow: '0 0 30px rgba(255, 140, 66, 0.7), 0 0 60px rgba(76, 175, 80, 0.4)'
              } : {}}
            >
              {profiles.gameDeveloper.label}
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-green-200 max-w-md"
              animate={hoveredSide === 'game' ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 10 }}
            >
              Crafting interactive worlds and stories
            </motion.p>
            
            <motion.div 
              className="mt-8 inline-flex items-center space-x-2 px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm"
              animate={{ 
                x: hoveredSide === 'game' ? 20 : 0,
                backgroundColor: hoveredSide === 'game' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)'
              }}
            >
              <span className="text-green-200">Explore Games</span>
              <motion.span 
                className="text-2xl"
                animate={{ x: hoveredSide === 'game' ? [0, 10, 0] : 0 }}
                transition={{ duration: 0.8, repeat: hoveredSide === 'game' ? Infinity : 0 }}
              >
                →
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating orbs */}
        <motion.div 
          className="absolute bottom-10 left-10 w-20 h-20 bg-green-500/30 rounded-full blur-xl"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-10 right-10 w-32 h-32 bg-game-green-500/20 rounded-full blur-xl"
          animate={{ 
            y: [0, 40, 0],
            x: [0, -20, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </motion.div>

      {/* Full-Stack Developer Panel - Blue/Green/green Theme */}
      <motion.div
        className="relative flex-1 cursor-pointer group overflow-hidden"
        variants={itemVariants}
        whileHover={{ flex: 1.2 }}
        transition={{ duration: 0.4 }}
        onHoverStart={() => setHoveredSide('fullstack')}
        onHoverEnd={() => setHoveredSide(null)}
        onClick={() => handleClick('fullStackDeveloper')}
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-royal-blue-600/90 via-terminal-green-600/80 to-green-600/90" />
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-transparent"
          animate={{ x: ['200%', '-100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* CRT Flicker Effect */}
        {retroEffects && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-transparent via-royal-blue-500/10 to-transparent"
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 0.1, repeat: Infinity, repeatType: 'reverse' }}
          />
        )}
        
        {/* Scanline Overlay */}
        {retroEffects && (
          <div className="absolute inset-0 bg-pixel-grid dark:bg-pixel-grid-dark bg-grid opacity-20" />
        )}
        
        {/* Animated border */}
        <motion.div 
          className="absolute inset-0 border-4 border-royal-blue-400 opacity-0 group-hover:opacity-100"
          animate={hoveredSide === 'fullstack' ? { 
            scale: [1, 1.02, 1],
            borderColor: ['#4169E1', '#2ECC71', '#FF8C42']
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 text-white">
          <motion.div
            animate={hoveredSide === 'fullstack' ? { 
              scale: 1.1,
              x: 10,
              y: -10,
              rotate: 5
            } : { scale: 1, x: 0, y: 0, rotate: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="text-center"
          >
            <motion.div 
              className="mb-6 relative"
              animate={{ 
                rotate: hoveredSide === 'fullstack' ? -360 : 0,
                scale: hoveredSide === 'fullstack' ? [1, 1.2, 1] : 1
              }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <span className="text-7xl md:text-8xl block animate-float">💻</span>
              <motion.div 
                className="absolute -inset-4 bg-royal-blue-500/30 blur-xl rounded-full"
                animate={{ 
                  opacity: hoveredSide === 'fullstack' ? 0.8 : 0.2,
                  scale: hoveredSide === 'fullstack' ? 1.5 : 1
                }}
              />
              <motion.div 
                className="absolute -inset-6 bg-terminal-green-500/20 blur-2xl rounded-full"
                animate={{ 
                  opacity: hoveredSide === 'fullstack' ? 0.6 : 0.1,
                  scale: hoveredSide === 'fullstack' ? 1.8 : 1
                }}
              />
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-4 font-mono"
              animate={hoveredSide === 'fullstack' ? { 
                textShadow: '0 0 30px rgba(65, 105, 225, 0.7), 0 0 60px rgba(46, 204, 113, 0.4)'
              } : {}}
            >
              {profiles.fullStackDeveloper.label}
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-royal-blue-200 max-w-md"
              animate={hoveredSide === 'fullstack' ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 10 }}
            >
              Building scalable web solutions
            </motion.p>
            
            <motion.div 
              className="mt-8 inline-flex items-center space-x-2 px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm"
              animate={{ 
                x: hoveredSide === 'fullstack' ? -20 : 0,
                backgroundColor: hoveredSide === 'fullstack' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)'
              }}
            >
              <motion.span 
                className="text-2xl"
                animate={{ x: hoveredSide === 'fullstack' ? [0, -10, 0] : 0 }}
                transition={{ duration: 0.8, repeat: hoveredSide === 'fullstack' ? Infinity : 0 }}
              >
                ←
              </motion.span>
              <span className="text-royal-blue-200">Explore Code</span>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating orbs */}
        <motion.div 
          className="absolute bottom-10 right-10 w-20 h-20 bg-royal-blue-500/30 rounded-full blur-xl"
          animate={{ 
            y: [0, -30, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-terminal-green-500/20 rounded-full blur-xl"
          animate={{ 
            y: [0, 40, 0],
            x: [0, 20, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </motion.div>

      {/* Mobile View Stacked Layout */}
      <div className="md:hidden flex flex-col w-full">
        <motion.div 
          className="h-1/2 bg-gradient-to-br from-green-600 to-game-green-700 p-8 flex items-center justify-center cursor-pointer relative overflow-hidden"
          onClick={() => handleClick('gameDeveloper')}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <div className="text-center text-white relative z-10">
            <span className="text-5xl mb-4 block">🎮</span>
            <h2 className="text-3xl font-bold font-mono">{profiles.gameDeveloper.label}</h2>
          </div>
        </motion.div>
        <motion.div 
          className="h-1/2 bg-gradient-to-bl from-royal-blue-600 to-terminal-green-700 p-8 flex items-center justify-center cursor-pointer relative overflow-hidden"
          onClick={() => handleClick('fullStackDeveloper')}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-transparent"
            animate={{ x: ['200%', '-100%'] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <div className="text-center text-white relative z-10">
            <span className="text-5xl mb-4 block">💻</span>
            <h2 className="text-3xl font-bold font-mono">{profiles.fullStackDeveloper.label}</h2>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingSplit;