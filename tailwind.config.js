//const flowbite = require('flowbite-react/tailwind')
import flowbite from 'flowbite-react/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      boxShadow: {
        custom: '6px 6px 12px -2px rgba(0, 0, 0, 0.39)',
      },
      backgroundImage: {
        'hero-img': `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url('/Macbook.jpg?v=1')`,
      },
    },
  },
  plugins: [flowbite.plugin()],
}
