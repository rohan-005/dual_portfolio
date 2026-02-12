/* eslint-disable no-unused-vars */
// src/components/ProfileShell.jsx
import { motion } from 'framer-motion';
import { lazy, Suspense, useEffect, useRef } from 'react';

const HeroSection = lazy(() => import('./sections/HeroSection'));
const AboutSection = lazy(() => import('./sections/AboutSection'));
const ExperienceSection = lazy(() => import('./sections/ExperienceSection'));
const ProjectsSection = lazy(() => import('./sections/ProjectsSection'));
const SkillsSection = lazy(() => import('./sections/SkillsSection'));
const CVSection = lazy(() => import('./sections/CVSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));
const SocialLinks = lazy(() => import('./SocialLinks'));
const LoadingSpinner = lazy(() => import('./LoadingSpinner'));

const ProfileShell = ({ profileData, personData, theme, retroEffects, isActive }) => {
  const sectionRef = useRef(null);
  const isGameDev = profileData.id === 'game';

  const accentColors = isGameDev 
    ? {
        primary: 'green-500',
        secondary: 'game-green-500',
        gradient: 'from-green-500 via-game-green-500 to-green-600',
        light: 'green-100',
        dark: 'green-900'
      }
    : {
        primary: 'royal-blue-500',
        secondary: 'terminal-green-500',
        gradient: 'from-royal-blue-500 via-terminal-green-500 to-green-500',
        light: 'blue-100',
        dark: 'blue-900'
      };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [profileData.id]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -60,
      rotateX: 15,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      ref={sectionRef}
      className={`min-h-screen bg-white dark:bg-black relative ${
        isActive ? 'animate-profile-switch' : ''
      }`}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Animated background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div 
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${accentColors.gradient} opacity-[0.02]`}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Suspense fallback={<LoadingSpinner />}>
          <motion.div 
            variants={sectionVariants}
            custom={0}
          >
            <HeroSection 
              hero={profileData.hero} 
              name={personData.name}
              retroEffects={retroEffects}
              accentColors={accentColors}
              isGameDev={isGameDev}
            />
          </motion.div>

          <motion.div 
            variants={sectionVariants}
            custom={1}
            transition={{ delay: 0.1 }}
          >
            <AboutSection 
              about={profileData.about} 
              retroEffects={retroEffects}
              accentColors={accentColors}
              isGameDev={isGameDev}
            />
          </motion.div>

          <motion.div 
            variants={sectionVariants}
            custom={2}
            transition={{ delay: 0.2 }}
          >
            <ExperienceSection 
              experiences={profileData.experience} 
              retroEffects={retroEffects}
              accentColors={accentColors}
              isGameDev={isGameDev}
            />
          </motion.div>

          <motion.div 
            variants={sectionVariants}
            custom={3}
            transition={{ delay: 0.3 }}
          >
            <ProjectsSection 
              projects={profileData.projects} 
              retroEffects={retroEffects}
              accentColors={accentColors}
              isGameDev={isGameDev}
            />
          </motion.div>

          <motion.div 
            variants={sectionVariants}
            custom={4}
            transition={{ delay: 0.4 }}
          >
            <SkillsSection 
              skills={profileData.skills} 
              profileType={profileData.id}
              retroEffects={retroEffects}
              accentColors={accentColors}
              isGameDev={isGameDev}
            />
          </motion.div>

          <motion.div 
            variants={sectionVariants}
            custom={5}
            transition={{ delay: 0.5 }}
          >
            <CVSection 
              cvFile={profileData.cvFile} 
              retroEffects={retroEffects}
              accentColors={accentColors}
              isGameDev={isGameDev}
            />
          </motion.div>

          <motion.div 
            variants={sectionVariants}
            custom={6}
            transition={{ delay: 0.6 }}
          >
            <ContactSection 
              email={personData.email}
              retroEffects={retroEffects}
              accentColors={accentColors}
              isGameDev={isGameDev}
            />
          </motion.div>

          <motion.div 
            variants={sectionVariants}
            custom={7}
            transition={{ delay: 0.7 }}
          >
            <SocialLinks 
              social={personData.social}
              retroEffects={retroEffects}
              accentColors={accentColors}
            />
          </motion.div>
        </Suspense>
      </div>
    </motion.div>
  );
};

export default ProfileShell;