/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tg: {
          blue: '#31b545',
          lightBlue: '#3390ec',
          bg: '#ebeef2',
          text: '#222222',
          hint: '#707579',
          white: '#ffffff',
          button: '#40a7e3',
        },
      },
      borderRadius: {
        tg: '15px',
      },
      boxShadow: {
        tg: '0 1px 2px 0 rgba(16,24,40,0.05)',
      },
    },
  },
  plugins: [],
};
