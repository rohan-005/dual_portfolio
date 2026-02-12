/* eslint-disable no-unused-vars */
// src/components/sections/CVSection.jsx
import { motion } from 'framer-motion';

const CVSection = ({ cvFile, retroEffects }) => {
  return (
    <section className="py-20 relative">
      <div className="flex items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-mono font-bold flex items-center">
          <span className="text-royal-blue-500 mr-2">#</span>
          resume
          {retroEffects && <span className="terminal-cursor ml-2 text-royal-blue-500">_</span>}
        </h2>
      </div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-royal-blue-50 to-white dark:from-royal-blue-950 dark:to-black p-12 rounded-lg pixel-border text-center"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-6xl mb-6">📄</div>
          <h3 className="text-2xl font-bold font-mono mb-4">Download my CV</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Get a detailed overview of my experience, skills, and projects.
          </p>
          <a
            href={cvFile}
            download
            className="inline-flex items-center px-8 py-4 bg-royal-blue-500 text-white rounded-lg font-mono hover:bg-royal-blue-600 transition-colors group"
          >
            <span>Download CV</span>
            <svg 
              className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CVSection;