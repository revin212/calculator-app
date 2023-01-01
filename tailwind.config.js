/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./*.html'],
  theme: {
    extend: {
      textColor: {
        'primary-text': 'var(--color-text-primary)',
        'secondary-text': 'var(--color-text-secondary)',
        'header-text': 'var(--color-text-header)',
        'equal-text': 'var(--color-text-equal)', 
      },

      backgroundColor:{
        'main-bg': 'var(--color-main-bg)',
        'toggle-bg': 'var(--color-toggle-bg)',
        'screen-bg': 'var(--color-screen-bg)',
        'key-primary': 'var(--key-bg-primary)',
        'key-secondary': 'var(--key-bg-secondary)',
        'key-ternary': 'var(--key-bg-ternary)',
        'key-hover-primary': 'var(--key-bg-hover-primary)',
        'key-hover-secondary': 'var(--key-bg-hover-secondary)',
        'key-hover-ternary': 'var(--key-bg-hover-ternary)',
      },

      boxShadow: {
        'primary-shadow': 'var(--key-shadow-primary)',
        'secondary-shadow': 'var(--key-shadow-secondary)',
        'ternary-shadow': 'var(--key-shadow-ternary)',
      },

      fontFamily: {
        'main-font': ['League Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
