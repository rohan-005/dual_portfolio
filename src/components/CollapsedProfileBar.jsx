/* eslint-disable no-unused-vars */
// src/components/CollapsedProfileBar.jsx
import { motion, AnimatePresence } from 'framer-motion';

const CollapsedProfileBar = ({ profile, onSwap, retroEffects, isSwitching }) => {
  const profileColors = profile.id === 'game' 
    ? {
        bg: 'from-green-600 via-game-green-600 to-green-700',
        accent: 'green-400',
        glow: 'rgba(255, 140, 66, 0.5)',
        icon: '🎮'
      }
    : {
        bg: 'from-royal-blue-600 via-terminal-green-600 to-green-500',
        accent: 'royal-blue-400',
        glow: 'rgba(65, 105, 225, 0.5)',
        icon: '💻'
      };

  return (
    <motion.div
      initial={{ width: 0, opacity: 0, x: profile.id === 'game' ? -50 : 50 }}
      animate={{ 
        width: 80, 
        opacity: 1, 
        x: 0,
        transition: {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.3
        }
      }}
      exit={{ width: 0, opacity: 0, x: profile.id === 'game' ? -50 : 50 }}
      whileHover={{ width: 100 }}
      className={`relative h-full bg-gradient-to-b ${profileColors.bg} cursor-pointer group overflow-hidden`}
      onClick={onSwap}
    >
      {/* CRT Effects */}
      {retroEffects && (
        <>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 0.1, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-pixel-grid-dark bg-grid opacity-10" />
        </>
      )}

      {/* Animated glow on hover */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        animate={isSwitching ? { 
          scale: [1, 1.5, 1],
          opacity: [0, 0.5, 0],
          backgroundColor: [`${profileColors.glow}`, 'transparent']
        } : {}}
        transition={{ duration: 0.5 }}
      />

      {/* Icon at top */}
      <motion.div 
        className="absolute top-8 left-1/2 transform -translate-x-1/2 text-2xl"
        animate={{ 
          y: [0, -5, 0],
          rotate: isSwitching ? [0, 10, -10, 0] : 0,
          scale: isSwitching ? [1, 1.2, 1] : 1
        }}
        transition={{ 
          y: { duration: 2, repeat: Infinity },
          rotate: { duration: 0.5 }
        }}
      >
        {profileColors.icon}
      </motion.div>

      {/* Vertical Text Container */}
      <div className="relative h-full flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <div className="transform -rotate-90 whitespace-nowrap text-white/90 font-mono text-sm tracking-wider">
            <AnimatePresence mode="wait">
              <motion.span
                key={profile.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                <span className={`inline-block mr-2 text-${profileColors.accent}`}>
                  {isSwitching ? '⚡' : '▶'}
                </span>
                SWITCH TO {profile.label.toUpperCase()}
                <span className={`inline-block ml-2 text-${profileColors.accent}`}>
                  {isSwitching ? '⚡' : '◀'}
                </span>
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Animated Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <div className={`w-1 h-12 bg-${profileColors.accent} rounded-full shadow-lg`} 
               style={{ boxShadow: `0 0 20px ${profileColors.glow}` }} />
        </motion.div>
      </div>

      {/* Shimmer effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-shimmer bg-shimmer"
        animate={{ backgroundPosition: ['-100%', '200%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  );
};

export default CollapsedProfileBar;