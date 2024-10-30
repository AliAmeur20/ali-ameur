/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
        '4xl': '1700px',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  daisyui: {
    themes: false,
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: false,
    themeRoot: ":root",
  },
}

