/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#194371',
        },
        secondary: {
          DEFAULT: '#060f19',
        },
        accent: {
          DEFAULT: '#427fbf',
        },
        text: {
          DEFAULT: '#f7fafd',
        },
        background: {
          DEFAULT: '#010204',
        },
      },
    },
  },
  plugins: [],
};
