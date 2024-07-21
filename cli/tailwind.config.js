import THEME_COLORS from "./src/assets/THEME_COLORS.ts";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': THEME_COLORS['primary-dark'],
        'primary-light': THEME_COLORS['primary-light'],
        'primary-main': THEME_COLORS['primary-main'],

        'secondary-dark': THEME_COLORS['secondary-dark'],
        'secondary-light': THEME_COLORS['secondary-light'],
        'secondary-main': THEME_COLORS['secondary-main'],

        'common-dark': THEME_COLORS['common-dark'],
        'common-light': THEME_COLORS['common-light'],
        'common-main': THEME_COLORS['common-main'],
        'common-black': THEME_COLORS['common-black']
      }
    },
  },
  plugins: [
    import('@tailwindcss/forms'),
  ],
}
