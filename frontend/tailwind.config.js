/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        heading: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        ember: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
        steel: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245,158,11,0.4), 0 0 40px rgba(245,158,11,0.2)' },
          '50%':       { boxShadow: '0 0 40px rgba(245,158,11,0.8), 0 0 80px rgba(245,158,11,0.4)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'marquee': {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'ember-rise': {
          '0%':   { transform: 'translateY(100vh) scale(0)', opacity: 0 },
          '20%':  { opacity: 1 },
          '100%': { transform: 'translateY(-20px) scale(1)', opacity: 0 },
        },
        'slide-up': {
          '0%':   { transform: 'translateY(60px)', opacity: 0 },
          '100%': { transform: 'translateY(0)',    opacity: 1 },
        },
        'spin-slow': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'ping-slow': {
          '0%':   { transform: 'scale(1)', opacity: 0.8 },
          '100%': { transform: 'scale(2)', opacity: 0 },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'shimmer':    'shimmer 3s linear infinite',
        'marquee':    'marquee 30s linear infinite',
        'ember-rise': 'ember-rise 4s ease-in infinite',
        'slide-up':   'slide-up 0.8s ease-out forwards',
        'spin-slow':  'spin-slow 12s linear infinite',
        'ping-slow':  'ping-slow 2s ease-out infinite',
      },
      backgroundImage: {
        'gold-gradient':    'linear-gradient(135deg, #f59e0b, #d97706)',
        'ember-gradient':   'linear-gradient(135deg, #f97316, #dc2626)',
        'steel-gradient':   'linear-gradient(135deg, #1e293b, #0f172a)',
        'hero-gradient':    'linear-gradient(to bottom, rgba(2,6,23,0.3), rgba(2,6,23,0.85))',
        'card-gradient':    'linear-gradient(135deg, rgba(30,41,59,0.8), rgba(15,23,42,0.95))',
        'shimmer-gold':     'linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.4) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
};
