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
        //orange
        'primary-shadow': 'var(--key-shadow-primary)',
        
        //blue
        'secondary-shadow': 'var(--key-shadow-secondary)',
      
        //red
        'ternary-shadow': 'var(--key-shadow-ternary)',
      },

      fontFamily: {
        'main-font': ['League Spartan', 'sans-serif'],
      },

      // colors: {
      //   'main-bg-blue': 'hsl(222, 26%, 31%)',
      //   'toggle-bg-blue': 'hsl(223, 31%, 20%)',
      //   'screen-bg-blue': 'hsl(224, 36%, 15%)',
      //   'key-bg-blue': 'hsl(225, 21%, 49%)',
      //   'key-shadow-blue': 'hsl(224, 28%, 35%)',
      //   'key-bg-red': 'hsl(6, 63%, 50%)',
      //   'key-shadow-red': 'hsl(6, 70%, 34%)',
      //   'key-bg-orange': 'hsl(30, 25%, 89%)',
      //   'key-shadow-orange': 'hsl(28, 16%, 65%)',
      //   'text-blue': 'hsl(221, 14%, 31%)',
      //   'text-white': 'hsl(0, 0%, 100%)',
      // },

    },
  },
  plugins: [],
}
