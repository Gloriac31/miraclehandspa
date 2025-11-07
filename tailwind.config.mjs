/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'accent-gold': '#FFDE59',
        charcoal: '#1A1A1A',
        offwhite: '#f2f2f2',
        primary: '#008ECC',
        'soft-white': '#FAFAFA',
        'medium-gray': '#666666',
        'dark-gray': '#2C2C2C',
        'dark-bg': '#1F2022',
        'primary-blue': '#1982B7',
        'accent-cyan': '#1BAEC9',
        'light-text': '#F6F6F6',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        custom: '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0 10px 25px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
