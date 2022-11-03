/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        nlwCopa: {
          gray: {
            900: '#121214',
            800: '#202024',
            600: '#323238',
            300: '#8D8D99',
            100: '#E1E1E6'
          },
          green: {
            500: '#129E57'
          },
          yellow: {
            500: '#F7DD43'
          }
        }
      }
    }
  },
  plugins: []
}
