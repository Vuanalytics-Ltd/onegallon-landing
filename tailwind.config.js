/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        clashDisplay: ['var(--font-clashDisplay)'],
        gotham: ['var(--font-gotham)'],
        sora: ['var(--font-sora)']
      },
      backgroundImage: {
         mobileHero: "url('../../public/hero.svg')",
         hero: "url('../../public/banner-mobile.png')"

      }
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false
  }
}
