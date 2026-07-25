/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8edf5',
          100: '#c5d0e6',
          200: '#9fb0d4',
          300: '#7890c2',
          400: '#5878b5',
          500: '#3860a8',
          600: '#2d4f8e',
          700: '#1e3a70',
          800: '#132754',
          900: '#0d1e3f',
          950: '#070f20',
        },
        red: {
          50: '#fff0f0',
          100: '#ffdddd',
          200: '#ffc0c0',
          300: '#ff9494',
          400: '#ff5757',
          500: '#ff2323',
          600: '#e53232',
          700: '#c41010',
          800: '#a21414',
          900: '#861717',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'glow-red': '0 0 30px rgba(220, 38, 38, 0.25)',
        'glow-blue': '0 0 30px rgba(30, 58, 112, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.07)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.14)',
      },
      animation: {
        'fade-up': 'fadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.35s ease-out forwards',
        'pulse-ring': 'pulseRing 2.5s ease-in-out infinite',
        'bounce-subtle': 'bounceSlight 2s ease-in-out infinite',
        'float': 'floating 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(220, 38, 38, 0.5)' },
          '50%': { boxShadow: '0 0 0 14px rgba(220, 38, 38, 0)' },
        },
        bounceSlight: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
