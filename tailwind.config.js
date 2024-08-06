/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '1200': '1200ms',
        '1000': '1000ms',
        '500': '500ms',
      },
      translate: {
        '16p': '16%',
        '-30p': '-30%',
        '260p': '260%',
        '-660p': '-660%',
        '-250p': '-250%',
      },
      scale: {
        '10': '10',
        '15': '15',
        '16': '16',
        '25': '25',
      },
      opacity: {
        '0': '0',
        '100': '1',
      },
      colors: {
        'custom-red': 'rgb(255, 0, 0)',
    },
    },
  },
  plugins: [],
}