/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#162B5A',
        'secondary-navy': '#0B1E45',
        'gold': '#D4AF37',
        'light': '#EDF1F5',
        'white': '#FFFFFF',
        'primary-text': '#0F234B',
        'secondary-text': '#5E6B85',
      },
      borderRadius: {
        'DEFAULT': '16px',
        'large': '24px',
      },
      boxShadow: {
        'card': '0 15px 40px rgba(0,0,0,0.12)',
        'card-hover': '0 25px 50px rgba(0,0,0,0.15)',
        'gold': '0 4px 12px rgba(212, 175, 55, 0.3)',
        'gold-hover': '0 8px 20px rgba(212, 175, 55, 0.5)',
        'navbar': '0 2px 12px rgba(0,0,0,0.2)',
        'navbar-scroll': '0 6px 24px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
};