/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";

/* -----------------------------------------
   Light doodle layer (SVG icons)
------------------------------------------ */
const Doodles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Game controller doodle */}
      <svg
        viewBox="0 0 64 64"
        className="absolute top-16 left-12 w-28 opacity-[0.18] text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M10 36c-2 6 2 12 8 12 4 0 6-3 10-3s6 3 10 3c6 0 10-6 8-12l-4-12c-1-4-5-6-9-6H27c-4 0-8 2-9 6l-4 12z" />
        <path d="M22 32h8M26 28v8M40 30h.01M44 34h.01" />
      </svg>

      {/* React doodle */}
      <svg
        viewBox="0 0 841.9 595.3"
        className="absolute bottom-24 right-20 w-32 opacity-[0.16] text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="18"
      >
        <g>
          <ellipse cx="420.9" cy="296.5" rx="45.7" ry="45.7" />
          <ellipse
            cx="420.9"
            cy="296.5"
            rx="189.5"
            ry="72.7"
            transform="rotate(60 420.9 296.5)"
          />
          <ellipse
            cx="420.9"
            cy="296.5"
            rx="189.5"
            ry="72.7"
            transform="rotate(120 420.9 296.5)"
          />
          <ellipse cx="420.9" cy="296.5" rx="189.5" ry="72.7" />
        </g>
      </svg>
    </div>
  );
};

const LandingSplit = ({ profiles, onSelect }) => {
  const [hoveredSide, setHoveredSide] = useState(null);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const panelVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleClick = (profileId) => {
    onSelect(profileId);
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row h-screen w-full"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* =====================================
          Game Developer
      ===================================== */}
      <motion.div
        variants={panelVariants}
        className="flex-1 relative cursor-pointer overflow-hidden"
        onHoverStart={() => setHoveredSide("game")}
        onHoverEnd={() => setHoveredSide(null)}
        onClick={() => handleClick("gameDeveloper")}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
      >
        {/* Sketch board background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,.25) 0px, rgba(255,255,255,.25) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, rgba(255,255,255,.25) 0px, rgba(255,255,255,.25) 1px, transparent 1px, transparent 24px)"
          }}
        />

        <Doodles />

        <div className="relative h-full flex flex-col items-center justify-center px-10 text-white">
          <span className="text-6xl mb-6">🎮</span>

          <h2 className="text-4xl md:text-5xl font-semibold font-mono mb-4">
            {profiles.gameDeveloper.label}
          </h2>

          <p className="text-lg md:text-xl text-green-100 max-w-md text-center mb-8">
            Crafting immersive interactive experiences and game worlds.
          </p>

          <div
            className={`px-6 py-3 rounded-full border transition-all ${
              hoveredSide === "game"
                ? "bg-white/15 border-white/40"
                : "bg-white/10 border-white/20"
            }`}
          >
            <span className="text-sm tracking-wide">
              View Game Projects
            </span>
          </div>
        </div>
      </motion.div>

      {/* =====================================
          Full-Stack Developer
      ===================================== */}
      <motion.div
        variants={panelVariants}
        className="flex-1 relative cursor-pointer overflow-hidden"
        onHoverStart={() => setHoveredSide("fullstack")}
        onHoverEnd={() => setHoveredSide(null)}
        onClick={() => handleClick("fullStackDeveloper")}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
      >
        {/* Sketch board background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-indigo-600" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,.25) 0px, rgba(255,255,255,.25) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, rgba(255,255,255,.25) 0px, rgba(255,255,255,.25) 1px, transparent 1px, transparent 24px)"
          }}
        />

        <Doodles />

        <div className="relative h-full flex flex-col items-center justify-center px-10 text-white">
          <span className="text-6xl mb-6">💻</span>

          <h2 className="text-4xl md:text-5xl font-semibold font-mono mb-4">
            {profiles.fullStackDeveloper.label}
          </h2>

          <p className="text-lg md:text-xl text-blue-100 max-w-md text-center mb-8">
            Designing and building scalable, production-ready web platforms.
          </p>

          <div
            className={`px-6 py-3 rounded-full border transition-all ${
              hoveredSide === "fullstack"
                ? "bg-white/15 border-white/40"
                : "bg-white/10 border-white/20"
            }`}
          >
            <span className="text-sm tracking-wide">
              View Web Projects
            </span>
          </div>
        </div>
      </motion.div>

      {/* =====================================
          Mobile stacked view
      ===================================== */}
      <div className="md:hidden flex flex-col w-full h-screen">
        <div
          className="flex-1 relative bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white overflow-hidden"
          onClick={() => handleClick("gameDeveloper")}
        >
          <Doodles />
          <div className="relative text-center">
            <div className="text-5xl mb-4">🎮</div>
            <h2 className="text-3xl font-semibold font-mono">
              {profiles.gameDeveloper.label}
            </h2>
          </div>
        </div>

        <div
          className="flex-1 relative bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white overflow-hidden"
          onClick={() => handleClick("fullStackDeveloper")}
        >
          <Doodles />
          <div className="relative text-center">
            <div className="text-5xl mb-4">💻</div>
            <h2 className="text-3xl font-semibold font-mono">
              {profiles.fullStackDeveloper.label}
            </h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingSplit;
