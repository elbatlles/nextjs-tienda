module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      padding: ['hover'],
    },
  },
  plugins: [],
}
/*
  theme: {
    textColor: (theme) => theme('colors'),
    textColor: {
      primary: '#90BE6D',
      primaryhover: '#43AA8B',
      secundary: '#F3722C',
      secundaryhover: '#F8961E',
    },
    color: (theme) => theme('colors'),
    colors: {
      primary: '#90BE6D',
      primaryhover: '#43AA8B',
      secundary: '#F3722C',
      secundaryhover: '#F8961E',
    },
    extend: {},
  }
*/
