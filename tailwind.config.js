/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006400',
        },
        secondary: {
          DEFAULT: '#060f19',
        },
        accent: {
          DEFAULT: '#006400',
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
      '3xl': '1792px',
      '4xl': '2048px',
      xtra: '1340px',
    },
  },
  plugins: [],
};
