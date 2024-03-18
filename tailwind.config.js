module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-black': '#1E1E1E',
        'custom-yellow': '#FFBB00',
        'custom-light-gray': '#EFEFEF',
        'custom-dark-gray': '#C5C5C5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
