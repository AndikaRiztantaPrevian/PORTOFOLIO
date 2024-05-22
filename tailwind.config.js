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
        'profile-1': 'radial-gradient(circle, #090924 10%, transparent 70%)',
        'profile-2': 'radial-gradient(circle, #091224 12%, transparent 70%)',
        'custome-mobile': 'radial-gradient(circle, #091224 12%, transparent 70%)',
        'custome-skills-1': 'radial-gradient(circle, #090924 1%, transparent 30%)',
        'custome-skills-2': 'radial-gradient(circle, #091224 5%, transparent 45%)',
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