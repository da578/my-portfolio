export default {
  content: {
    files: [
      './components/**/*.{js,vue,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './app.vue',
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#BFDBFE',
          100: '#93C5FD',
          500: '#3B82F6',
          600: '#2563EB'
        },
        secondary: {
          50: '#E9D5FF',
          100: '#D8B4FE',
          500: '#8B5CF6',
          600: '#7C3AED'
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      transitionProperty: {
        'height': 'height'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}