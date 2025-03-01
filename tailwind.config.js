/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./signup.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        cherry: ['"Cherry Runaway"', 'cursive'],
        georgia: ['Georgia', 'serif'],
        palatino: ['"Palatino Linotype"', 'serif'],
        times: ['"Times New Roman"', 'serif'],
        arial: ['Arial', 'sans-serif'],
        verdana: ['Verdana', 'sans-serif'],
        trebuchet: ['"Trebuchet MS"', 'sans-serif'],
        tahoma: ['Tahoma', 'sans-serif'],
        courier: ['"Courier New"', 'monospace'],
        lucida: ['"Lucida Console"', 'monospace'],
        comic: ['"Comic Sans MS"', 'cursive'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#DEB887",
          "secondary": "#F5F5DC",
          "accent": "#FFDEAD",
          "neutral": "#2b3440",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

