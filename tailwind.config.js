/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '1,5': '1.5px',  
    },
    extend: {
      boxShadow: {
        'shadow-button': '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        'blue-text' : '#0077AA',
        'button-create': '#11BBDD',
        'gray-body': '#f5f5f5',
      },
      spacing: {
        '264': '264px',

      },
    },
  },
  plugins: [],
}
