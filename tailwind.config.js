/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        'sometype-mono': ['Sometype Mono', 'monospace'],
      },
      backgroundImage: {
        'profile-1': 'radial-gradient(circle, #090924 10%, black 70%)',
        'profile-2': 'radial-gradient(circle, #091224 12%, black 70%)',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.25em',
      }
    },
  },
  plugins: [],
}