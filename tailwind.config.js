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
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      xtra: '1340px',
    },
  },
  plugins: [],
};
