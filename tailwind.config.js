/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfaef',
          100: '#faf0d0',
          200: '#f5dfa0',
          300: '#eec76a',
          400: '#e5ac3e',
          500: '#d49321',
          600: '#b97318',
          700: '#935417',
          800: '#784419',
          900: '#653919',
          950: '#3a1d09',
        },
        cream: {
          50: '#fefef9',
          100: '#fdf9ee',
          200: '#faf2d8',
          300: '#f5e5b4',
          400: '#efd08a',
          500: '#e8b86d',
          600: '#da9a4e',
          700: '#b87d3c',
          800: '#946335',
          900: '#78512f',
          950: '#412815',
        },
        ivory: '#FFFFF0',
        champagne: '#F7E7CE',
        blush: '#FFB6C1',
        rose: {
          gold: '#B76E79',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        script: ['Great Vibes', 'cursive'],
        sans: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'petal-fall': 'petalFall 8s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-100px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 147, 33, 0.4), 0 0 40px rgba(212, 147, 33, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 147, 33, 0.8), 0 0 80px rgba(212, 147, 33, 0.4)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C6973F 0%, #E8C96B 25%, #D4A017 50%, #E8C96B 75%, #C6973F 100%)',
        'cream-gradient': 'linear-gradient(180deg, #FDF8F0 0%, #FAF0DC 50%, #F5E6C8 100%)',
      },
    },
  },
  plugins: [],
}
