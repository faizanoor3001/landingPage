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
        primary: {
          900: '#1B4332',
          800: '#2D6A4F',
          700: '#40916C',
          600: '#52B788',
          500: '#74C69D',
          400: '#95D5B2',
          300: '#B7E4C7',
        },
      },
    },
  },
  plugins: [],
} 