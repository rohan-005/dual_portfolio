/* eslint-disable no-unused-vars */
// src/components/sections/ProjectsSection.jsx
import { motion } from 'framer-motion';
import { useState, lazy, Suspense } from 'react';

const ProjectCard = lazy(() => import('../ProjectCard'));

const ProjectsSection = ({ projects, retroEffects }) => {
  return (
    <section className="py-20 relative">
      <div className="flex items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-mono font-bold flex items-center">
          <span className="text-royal-blue-500 mr-2">#</span>
          projects
          {retroEffects && <span className="terminal-cursor ml-2 text-royal-blue-500">_</span>}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Suspense fallback={<div>Loading...</div>}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              retroEffects={retroEffects}
            />
          ))}
        </Suspense>
      </div>
    </section>
  );
};

export default ProjectsSection;