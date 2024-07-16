/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0c0c2a',
        'primary-light': '#5a77e6',
        'primary-main': '#091c94',

        'secondary-dark': '#1f0032',
        'secondary-light': '#220144',
        'secondary-main': '#3c345f',

        'common-dark': '#726f7e',
        'common-light': '#a19fad',
        'common-main': '#fff',
        'common-black': '#3b3b3b'
      }
    },
  },
  plugins: [
    import('@tailwindcss/forms'),
  ],
}
