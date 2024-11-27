/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-b': 'linear-gradient(#F33F41 , #FEC93E)',
        'text-gradient-b': 'linear-gradient(#F33F41 30%, #FEC93E)',
        'gradient-r': 'linear-gradient(to right, #F33F41 20%, #FEC93E)',
        'btn-gradient': 'linear-gradient(to bottom,  #F84145 ,#EFB635 160%,#F84145)',
        'gradient-l': 'linear-gradient(360deg, #F33F41 0%, #FB6D72 95%)'
      },
      backgroundColor: {
        primary: '#F33F41',
        secondary: '#FEC93E',
      }
    },
    screens: {
      'xs': '480px',
      // => @media (min-width: 480px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'mdlarge': '900px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}