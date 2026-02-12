// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Add soft-white to the colors object
        'soft-white': {
          DEFAULT: "rgb(248 249 252 / <alpha-value>)",
          50: "rgb(255 255 255 / <alpha-value>)",
          100: "rgb(253 253 254 / <alpha-value>)",
          200: "rgb(248 249 252 / <alpha-value>)",
          300: "rgb(241 243 248 / <alpha-value>)",
          400: "rgb(232 236 242 / <alpha-value>)",
          500: "rgb(223 228 236 / <alpha-value>)",
          600: "rgb(200 208 220 / <alpha-value>)",
          700: "rgb(177 188 204 / <alpha-value>)",
          800: "rgb(154 168 188 / <alpha-value>)",
          900: "rgb(131 148 172 / <alpha-value>)",
        },
        'warm-white': {
          DEFAULT: "rgb(250 247 242 / <alpha-value>)",
          50: "rgb(255 253 250 / <alpha-value>)",
          100: "rgb(253 250 245 / <alpha-value>)",
          200: "rgb(250 247 242 / <alpha-value>)",
          300: "rgb(245 240 232 / <alpha-value>)",
          400: "rgb(240 233 222 / <alpha-value>)",
          500: "rgb(235 226 212 / <alpha-value>)",
          600: "rgb(216 201 181 / <alpha-value>)",
          700: "rgb(197 176 150 / <alpha-value>)",
          800: "rgb(178 151 119 / <alpha-value>)",
          900: "rgb(159 126 88 / <alpha-value>)",
        },
        'royal-blue': {
          DEFAULT: "rgb(65 105 225 / <alpha-value>)",
          50: "rgb(240 244 255 / <alpha-value>)",
          100: "rgb(224 233 255 / <alpha-value>)",
          200: "rgb(194 211 255 / <alpha-value>)",
          300: "rgb(163 189 255 / <alpha-value>)",
          400: "rgb(133 167 255 / <alpha-value>)",
          500: "rgb(65 105 225 / <alpha-value>)",
          600: "rgb(49 84 180 / <alpha-value>)",
          700: "rgb(33 63 135 / <alpha-value>)",
          800: "rgb(20 42 90 / <alpha-value>)",
          900: "rgb(10 21 48 / <alpha-value>)",
        },
        'orange': {
          DEFAULT: "rgb(255 140 66 / <alpha-value>)",
          50: "rgb(255 244 232 / <alpha-value>)",
          100: "rgb(255 233 209 / <alpha-value>)",
          200: "rgb(255 212 163 / <alpha-value>)",
          300: "rgb(255 190 117 / <alpha-value>)",
          400: "rgb(255 169 71 / <alpha-value>)",
          500: "rgb(255 140 66 / <alpha-value>)",
          600: "rgb(230 106 26 / <alpha-value>)",
          700: "rgb(179 79 15 / <alpha-value>)",
          800: "rgb(128 54 8 / <alpha-value>)",
          900: "rgb(77 31 4 / <alpha-value>)",
        },
        'green': {
          DEFAULT: "rgb(15 61 46 / <alpha-value>)",
          50: "rgb(230 242 238 / <alpha-value>)",
          100: "rgb(205 229 221 / <alpha-value>)",
          200: "rgb(155 203 187 / <alpha-value>)",
          300: "rgb(105 177 153 / <alpha-value>)",
          400: "rgb(62 143 115 / <alpha-value>)",
          500: "rgb(15 61 46 / <alpha-value>)",
          600: "rgb(12 50 38 / <alpha-value>)",
          700: "rgb(9 40 30 / <alpha-value>)",
          800: "rgb(6 29 22 / <alpha-value>)",
          900: "rgb(3 18 14 / <alpha-value>)",
        },
        'game-green': {
          DEFAULT: "rgb(76 175 80 / <alpha-value>)",
          50: "rgb(241 248 241 / <alpha-value>)",
          100: "rgb(227 241 227 / <alpha-value>)",
          200: "rgb(199 228 199 / <alpha-value>)",
          300: "rgb(171 214 171 / <alpha-value>)",
          400: "rgb(143 201 143 / <alpha-value>)",
          500: "rgb(76 175 80 / <alpha-value>)",
          600: "rgb(61 140 64 / <alpha-value>)",
          700: "rgb(46 105 48 / <alpha-value>)",
          800: "rgb(30 70 32 / <alpha-value>)",
          900: "rgb(15 35 16 / <alpha-value>)",
        },
        'terminal-green': {
          DEFAULT: "rgb(46 204 113 / <alpha-value>)",
          50: "rgb(234 251 241 / <alpha-value>)",
          100: "rgb(212 247 227 / <alpha-value>)",
          200: "rgb(169 239 199 / <alpha-value>)",
          300: "rgb(126 231 171 / <alpha-value>)",
          400: "rgb(83 223 143 / <alpha-value>)",
          500: "rgb(46 204 113 / <alpha-value>)",
          600: "rgb(37 166 91 / <alpha-value>)",
          700: "rgb(28 126 69 / <alpha-value>)",
          800: "rgb(19 86 47 / <alpha-value>)",
          900: "rgb(10 45 25 / <alpha-value>)",
        },
        'coral': {
          DEFAULT: "rgb(255 107 107 / <alpha-value>)",
          50: "rgb(255 240 240 / <alpha-value>)",
          100: "rgb(255 225 225 / <alpha-value>)",
          200: "rgb(255 195 195 / <alpha-value>)",
          300: "rgb(255 165 165 / <alpha-value>)",
          400: "rgb(255 135 135 / <alpha-value>)",
          500: "rgb(255 107 107 / <alpha-value>)",
          600: "rgb(224 85 85 / <alpha-value>)",
          700: "rgb(179 63 63 / <alpha-value>)",
          800: "rgb(134 42 42 / <alpha-value>)",
          900: "rgb(89 21 21 / <alpha-value>)",
        },
      },
      fontFamily: {
        mono: [
          "SF Mono",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      animation: {
        flicker: "flicker 3s infinite",
        scanline: "scanline 8s linear infinite",
        "cursor-blink": "blink 1s step-end infinite",
        grain: "grain 8s steps(10) infinite",
        "parallax-slow": "parallax 20s ease infinite",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "slide-in-left": "slide-in-left 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-in-right": "slide-in-right 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-pulse": "scale-pulse 2s ease-in-out infinite",
        "profile-switch":
          "profile-switch 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        shimmer: "shimmer 3s infinite",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.98 },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
        parallax: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "25%": { transform: "translate(-5px, 5px)" },
          "75%": { transform: "translate(5px, -5px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow:
              "0 0 5px rgba(76, 175, 80, 0.3), 0 0 20px rgba(76, 175, 80, 0.1)",
          },
          "50%": {
            boxShadow:
              "0 0 20px rgba(76, 175, 80, 0.5), 0 0 40px rgba(76, 175, 80, 0.2)",
          },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%) scale(0.8)", opacity: 0 },
          "100%": { transform: "translateX(0) scale(1)", opacity: 1 },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%) scale(0.8)", opacity: 0 },
          "100%": { transform: "translateX(0) scale(1)", opacity: 1 },
        },
        "scale-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "profile-switch": {
          "0%": { transform: "scale(0.9) rotate(-2deg)", opacity: 0 },
          "50%": { transform: "scale(1.05) rotate(1deg)", opacity: 0.8 },
          "100%": { transform: "scale(1) rotate(0)", opacity: 1 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-100%" },
          "100%": { backgroundPosition: "200%" },
        },
      },
      backgroundImage: {
        "pixel-grid":
          "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
        "pixel-grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
        "gradient-game":
          "linear-gradient(135deg, #FF8C42 0%, #FF6B6B 50%, #4CAF50 100%)",
        "gradient-fullstack":
          "linear-gradient(135deg, #4169E1 0%, #2ECC71 50%, #FF8C42 100%)",
        "gradient-soft":
          "linear-gradient(180deg, #F8F9FC 0%, #F1F3F8 100%)",
        "shimmer-light":
          "linear-gradient(90deg, transparent, rgba(65,105,225,0.08), transparent)",
        "shimmer-dark":
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
      },
      backgroundSize: {
        grid: "20px 20px",
        shimmer: "200% 100%",
      },
    },
  },
  plugins: [],
}