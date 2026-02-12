/* eslint-disable no-unused-vars */
// src/components/sections/ExperienceSection.jsx
import { motion } from 'framer-motion';

const ExperienceSection = ({ experiences, retroEffects, accentColors, isGameDev }) => {
  return (
    <section className="py-20 relative">
      <div className="flex items-center mb-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-mono font-bold flex items-center"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className={`text-${accentColors.primary} mr-2`}>&gt;</span>
          work_history
          {retroEffects && (
            <motion.span 
              className={`terminal-cursor ml-2 text-${accentColors.primary}`}
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              _
            </motion.span>
          )}
        </motion.h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative pl-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.6,
              delay: index * 0.15,
              type: "spring",
              damping: 15
            }}
            whileHover={{ x: 10 }}
          >
            <motion.div 
              className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-${accentColors.primary}`}
              animate={{ 
                scale: [1, 1.3, 1],
                boxShadow: [`0 0 0px ${accentColors.primary}`, `0 0 20px ${accentColors.primary}`, `0 0 0px ${accentColors.primary}`]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <div className={`bg-gradient-to-r ${isGameDev ? 'from-green-500/5 to-game-green-500/5' : 'from-royal-blue-500/5 to-terminal-green-500/5'} dark:from-gray-900 dark:to-gray-900 p-6 rounded-lg pixel-border relative overflow-hidden group`}>
              
              {/* Hover shimmer effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-shimmer bg-shimmer"
                initial={{ backgroundPosition: '-100%' }}
                whileHover={{ backgroundPosition: '200%' }}
                transition={{ duration: 0.8 }}
              />
              
              <div className="flex flex-wrap items-center justify-between mb-4 relative z-10">
                <h3 className="text-2xl font-bold font-mono group-hover:text-{accentColors.primary} transition-colors">
                  {exp.role}
                </h3>
                <motion.span 
                  className={`text-${accentColors.primary} dark:text-${accentColors.secondary} font-mono px-3 py-1 bg-${accentColors.primary}/10 rounded-full`}
                  whileHover={{ scale: 1.05 }}
                >
                  {exp.period}
                </motion.span>
              </div>
              
              <p className={`text-xl text-${accentColors.primary} dark:text-${accentColors.secondary} mb-4 font-mono`}>
                {exp.company}
              </p>
              
              <ul className="space-y-2 mb-4">
                {exp.description.map((desc, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className={`text-${accentColors.primary} mr-2`}>▹</span>
                    <span className="text-gray-600 dark:text-gray-400">{desc}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    className={`px-3 py-1 text-sm bg-${accentColors.primary}/10 text-${accentColors.primary} dark:text-${accentColors.secondary} rounded-full font-mono border border-${accentColors.primary}/20`}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: `rgba(var(--${accentColors.primary}), 0.2)`
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;