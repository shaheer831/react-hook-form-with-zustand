/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1220px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        'step-colors': {
          '0%': { color: 'white', backgroundColor: 'white' },
          '50%': { color: '#888888', backgroundColor: '#bbbbbb' },
          '100%': { color: 'black', backgroundColor: 'black' },
        },
      },
      animation: {
        'step-colors': 'step-colors 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
