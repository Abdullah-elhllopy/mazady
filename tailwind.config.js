/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D20653', 
        secondary: '#FDBC01', 
        natural : '#44215D',
        accent : '#fae6ed',
        info:'#414141',
        tax:'#eae7ed',
        time : '#808080',
        realValue : '#f0f0f0',
        semiDark : '#707070'
      },
      fontWeight: {
        bold: '700', // Example custom font weight
        medium: '500', // Example custom font weight
      },
      fontSize: {
        small: '14px', // Example custom font size
        large: '24px', // Example custom font size
      },
    },
  },
  plugins: [],
}
