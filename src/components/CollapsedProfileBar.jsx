/* eslint-disable no-unused-vars */
// src/components/CollapsedProfileBar.jsx
import { motion, AnimatePresence } from "framer-motion";

const CollapsedProfileBar = ({ profile, onSwap, retroEffects, isSwitching }) => {
  const profileColors =
    profile.id === "game"
      ? {
          bg: "from-green-500 to-emerald-600",
          accent: "green-300",
          glow: "rgba(255, 140, 66, 0.35)",
          icon: "🎮"
        }
      : {
          bg: "from-sky-500 to-indigo-600",
          accent: "sky-300",
          glow: "rgba(65, 105, 225, 0.35)",
          icon: "💻"
        };

  return (
    <motion.div
      initial={{ width: 0, opacity: 0, x: profile.id === "game" ? -30 : 30 }}
      animate={{
        width: 88,
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      }}
      exit={{ width: 0, opacity: 0, x: profile.id === "game" ? -30 : 30 }}
      whileHover={{ width: 104 }}
      className={`relative h-full bg-gradient-to-b ${profileColors.bg} cursor-pointer overflow-hidden`}
      onClick={onSwap}
    >
      {/* subtle border */}
      <div className="absolute inset-0 border border-white/20" />

      {/* soft hover glow (only when switching) */}
      {isSwitching && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.3 }}
          style={{ backgroundColor: profileColors.glow }}
        />
      )}

      {/* icon */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-2xl">
        {profileColors.icon}
      </div>

      {/* vertical label */}
      <div className="relative h-full flex items-center justify-center">
        <div className="transform -rotate-90 whitespace-nowrap text-white font-mono text-base md:text-lg tracking-wider">
          <AnimatePresence mode="wait">
            <motion.span
              key={profile.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2"
            >
              <span className={`text-${profileColors.accent}`}>
                {isSwitching ? "…" : "→"}
              </span>
              <span className="font-semibold">
                SWITCH TO {profile.label.toUpperCase()}
              </span>
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* bottom indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{
          scale: isSwitching ? 1.15 : 1,
          opacity: isSwitching ? 1 : 0.7
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className={`w-1.5 h-10 bg-${profileColors.accent} rounded-full`}
        />
      </motion.div>
    </motion.div>
  );
};

export default CollapsedProfileBar;
