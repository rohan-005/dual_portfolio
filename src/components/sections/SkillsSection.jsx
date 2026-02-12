/* eslint-disable no-unused-vars */
// src/components/sections/SkillsSection.jsx
import { motion } from 'framer-motion';

const SkillsSection = ({ skills, profileType, retroEffects, accentColors, isGameDev }) => {
  const renderGameDeveloperSkills = () => (
    <div className="grid md:grid-cols-3 gap-8">
      <SkillCategory title="Core Skills" skills={skills.core} accentColors={accentColors} />
      <SkillCategory title="Tools" skills={skills.tools} accentColors={accentColors} />
      <SkillCategory title="Engines" skills={skills.engines} accentColors={accentColors} />
    </div>
  );

  const renderFullStackSkills = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <SkillCategory title="Frontend" skills={skills.frontend} accentColors={accentColors} />
      <SkillCategory title="Backend" skills={skills.backend} accentColors={accentColors} />
      <SkillCategory title="Databases" skills={skills.databases} accentColors={accentColors} />
      <SkillCategory title="DevOps" skills={skills.devops} accentColors={accentColors} />
    </div>
  );

  const SkillCategory = ({ title, skills, accentColors }) => (
    <motion.div
      initial={{ y: 40, opacity: 0, scale: 0.9 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        damping: 15
      }}
      whileHover={{ y: -5 }}
      className={`bg-gradient-to-br ${isGameDev ? 'from-green-500/5 to-game-green-500/5' : 'from-royal-blue-500/5 to-terminal-green-500/5'} dark:from-gray-900 dark:to-gray-900 p-6 rounded-lg pixel-border relative overflow-hidden group`}
    >
      {/* Animated background on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-shimmer bg-shimmer"
        initial={{ backgroundPosition: '-100%' }}
        whileHover={{ backgroundPosition: '200%' }}
        transition={{ duration: 0.8 }}
      />
      
      <h3 className={`text-xl font-bold font-mono mb-4 text-${accentColors.primary} dark:text-${accentColors.secondary} relative z-10`}>
        {title}
        <motion.span 
          className="ml-2 inline-block"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {isGameDev ? '🎮' : '⚡'}
        </motion.span>
      </h3>
      
      <div className="flex flex-wrap gap-2 relative z-10">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              delay: index * 0.05,
              type: "spring",
              damping: 12
            }}
            whileHover={{ 
              scale: 1.1,
              y: -2,
              backgroundColor: `rgba(var(--${accentColors.primary}), 0.15)`
            }}
            className={`px-3 py-2 bg-white dark:bg-gray-800 border-2 border-${accentColors.primary}/30 rounded-lg text-gray-700 dark:text-gray-300 font-mono text-sm hover:border-${accentColors.primary} transition-all cursor-default`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
      
      {/* Skill count badge */}
      <motion.div 
        className={`absolute bottom-2 right-2 text-xs text-${accentColors.primary} opacity-50`}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {skills.length} skills
      </motion.div>
    </motion.div>
  );

  return (
    <section className="py-20 relative">
      <div className="flex items-center mb-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-mono font-bold flex items-center"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className={`text-${accentColors.primary} mr-2`}>$</span>
          skills_&_tools
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

      {profileType === 'game' ? renderGameDeveloperSkills() : renderFullStackSkills()}
    </section>
  );
};

export default SkillsSection;