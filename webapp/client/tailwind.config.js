const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F3F1EF',
        secondary: '#95CFD9',
        primarybg: '#F3F1EF',
      },
      fontFamily: {
        'quick-sand': ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
