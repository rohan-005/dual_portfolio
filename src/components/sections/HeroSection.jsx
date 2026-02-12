/* eslint-disable no-unused-vars */
// src/components/sections/HeroSection.jsx
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HeroSection = ({ hero, name, retroEffects, accentColors, isGameDev }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const timeoutRef = useRef(null);

  useEffect(() => {
    const role = hero.typingRoles[currentRoleIndex];
    let charIndex = 0;

    setDisplayText("");
    setIsTyping(true);

    const type = () => {
      if (charIndex <= role.length) {
        setDisplayText(role.slice(0, charIndex));
        charIndex++;
        timeoutRef.current = setTimeout(type, 80);
      } else {
        setIsTyping(false);

        timeoutRef.current = setTimeout(() => {
          setCurrentRoleIndex(
            (prev) => (prev + 1) % hero.typingRoles.length
          );
        }, 1800);
      }
    };

    type();

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [currentRoleIndex, hero.typingRoles]);

  return (
    <section className="min-h-screen flex items-center justify-center relative py-24 overflow-hidden">

      {/* Soft background blobs */}
      <motion.div
        className={`absolute top-20 right-10 w-72 h-72 bg-${accentColors.primary}/10 rounded-full blur-3xl`}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        className={`absolute bottom-24 left-10 w-96 h-96 bg-${accentColors.secondary}/10 rounded-full blur-3xl`}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      {/* Decorative frames */}
      <div
        className={`absolute inset-16 border border-dashed rounded-xl pointer-events-none opacity-20 border-${accentColors.primary}`}
      />
      <div
        className={`absolute inset-28 border rounded-lg pointer-events-none opacity-10 border-${accentColors.secondary}`}
      />

      {/* -------------------------------
         Main doodle
      -------------------------------- */}
      <motion.div
        className="absolute top-24 right-24 opacity-30 dark:opacity-40"
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          className={`text-${accentColors.primary}`}
        >
          {isGameDev ? (
            <>
              <rect
                x="20"
                y="35"
                width="60"
                height="30"
                rx="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="35" cy="50" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="65" cy="50" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="45" y1="50" x2="55" y2="50" stroke="currentColor" strokeWidth="2" />
              <line x1="50" y1="45" x2="50" y2="55" stroke="currentColor" strokeWidth="2" />
            </>
          ) : (
            <>
              <path d="M30,40 L15,50 L30,60" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M70,40 L85,50 L70,60" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="45" y1="30" x2="55" y2="70" stroke="currentColor" strokeWidth="2" />
            </>
          )}
        </svg>
      </motion.div>

      {/* Small chip doodle */}
      <div className="absolute bottom-40 right-32 opacity-20">
        <svg
          width="90"
          height="90"
          viewBox="0 0 100 100"
          className={`text-${accentColors.secondary}`}
        >
          <rect x="28" y="28" width="44" height="44" rx="6" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="50" y1="10" x2="50" y2="28" stroke="currentColor" strokeWidth="2" />
          <line x1="50" y1="72" x2="50" y2="90" stroke="currentColor" strokeWidth="2" />
          <line x1="10" y1="50" x2="28" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="72" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      {/* Spark doodle */}
      <div className="absolute top-32 left-24 opacity-20">
        <svg
          width="70"
          height="70"
          viewBox="0 0 100 100"
          className={`text-${accentColors.primary}`}
        >
          <path
            d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* -------------------------------
          Frosthowl doodle (NEW)
          icy wolf / legendary weapon vibe
      -------------------------------- */}
      <motion.div
        className="absolute bottom-28 left-32 opacity-25 dark:opacity-35"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          className={`text-${accentColors.secondary}`}
        >
          {/* wolf head */}
          <path
            d="M25 60
               L20 40
               L35 30
               L45 40
               L55 40
               L65 30
               L80 40
               L75 60
               L60 70
               L50 65
               L40 70 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* eyes */}
          <line x1="42" y1="50" x2="46" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="54" y1="50" x2="58" y2="50" stroke="currentColor" strokeWidth="2" />

          {/* icy rune / hammer handle */}
          <line x1="50" y1="70" x2="50" y2="90" stroke="currentColor" strokeWidth="2" />
          <rect
            x="44"
            y="88"
            width="12"
            height="6"
            rx="1"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* -------------------------------
            Content
      -------------------------------- */}
      <div className="text-center max-w-4xl mx-auto px-6 relative z-10">
        <div
          className={`relative border rounded-xl p-10 md:p-14 border-${accentColors.primary}/30 bg-white/5 backdrop-blur-sm`}
        >
          {/* corner marks */}
          <span className={`absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-${accentColors.primary}`} />
          <span className={`absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-${accentColors.primary}`} />
          <span className={`absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-${accentColors.primary}`} />
          <span className={`absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-${accentColors.primary}`} />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: -30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-mono">
              {name}
            </h1>

            <div className="flex items-center justify-center space-x-3 text-xl md:text-2xl">
              <span className={`text-${accentColors.primary}`}>
                {isGameDev ? "🎮" : "💻"}
              </span>
              <span
                className={`text-${accentColors.primary} dark:text-${accentColors.secondary}`}
              >
                {hero.title}
              </span>
            </div>
          </motion.div>

          <motion.div
            className="text-2xl md:text-3xl font-mono mb-8 h-16 flex items-center justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className={`text-${accentColors.primary}`}>&lt;</span>

            <motion.span
              className="mx-2 inline-block"
              animate={isTyping ? { opacity: [0.7, 1, 0.7] } : {}}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              {displayText}
            </motion.span>

            {retroEffects && (
              <motion.span
                className={`ml-1 text-${accentColors.primary}`}
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity }}
              >
                _
              </motion.span>
            )}

            <span className={`text-${accentColors.secondary} ml-2`}>
              /&gt;
            </span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {hero.subtitle}
          </motion.p>
        </div>

        {/* scroll indicator */}
        <motion.div
          className="absolute -bottom-60 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div
            className={`w-6 h-10 border-2 border-${accentColors.primary} rounded-full flex justify-center`}
          >
            <motion.div
              className={`w-1 h-3 bg-${accentColors.primary} rounded-full mt-2`}
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
