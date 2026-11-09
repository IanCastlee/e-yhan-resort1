/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        eyhan: {
          dark: '#080c10',       // Deep obsidian noir
          surface: '#101720',    // Rich dark slate
          card: '#16202c',       // Muted glass slate
          gold: '#d4af37',       // Metallic Champagne Gold
          goldLight: '#f3e5ab',  // Pale soft gold
          goldHover: '#c59f27',  // Deep burnished gold
          sand: '#e8e2d5',       // Alabaster ivory
          muted: '#8e9aa8',      // Cool platinum gray
          border: 'rgba(212, 175, 55, 0.22)',
          borderSubtle: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Cinzel"', '"Montserrat"', 'system-ui', 'sans-serif'],
        body: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.35em',
        widest: '0.22em',
      },
      boxShadow: {
        goldGlow: '0 0 35px -5px rgba(212, 175, 55, 0.25)',
        goldGlowLg: '0 0 60px -10px rgba(212, 175, 55, 0.35)',
      },
    },
  },
  plugins: [],
};
