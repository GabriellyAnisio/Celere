const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'indigo': '#c6c7fd',
        'indigo-active': '#a0a1f8',
        'light-blue': '#a5e2fe',
        'light-blue-active': '#70c6ee',
        'light-green': '#bcf0dd',
        'green-active': '#71D8B2',
        'black': '#020318',
        'grayCelere': '#020318',
        'gray': '#F1F3FB',
        'white': '#f9f9ff',
        'box': '#f1f3fb'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
