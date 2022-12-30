/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'main-bg-blue': 'hsl(222, 26%, 31%)',
        'toggle-bg-blue': 'hsl(223, 31%, 20%)',
        'screen-bg-blue': 'hsl(224, 36%, 15%)',
        'key-bg-blue': 'hsl(225, 21%, 49%)',
        'key-shadow-blue': 'hsl(224, 28%, 35%)',
        'key-bg-red': 'hsl(6, 63%, 50%)',
        'key-shadow-red': 'hsl(6, 70%, 34%)',
        'key-bg-orange': 'hsl(30, 25%, 89%)',
        'key-shadow-orange': 'hsl(28, 16%, 65%)',
        'text-blue': 'hsl(221, 14%, 31%)',
        'text-white': 'hsl(0, 0%, 100%)',
      },

      fontFamily: {
        'main-font': ['League Spartan', 'sans-serif'],
      },

    },
  },
  plugins: [],
}
