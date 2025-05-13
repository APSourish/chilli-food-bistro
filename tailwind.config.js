/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D32F2F',
          light: '#EF5350',
          dark: '#B71C1C'
        },
        secondary: {
          DEFAULT: '#1B5E20',
          light: '#388E3C',
          dark: '#1B5E20'
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif']
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
      },
      boxShadow: {
        'menu': '0 4px 20px 0 rgba(0, 0, 0, 0.05)'
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite'
      }
    },
  },
  plugins: [],
};