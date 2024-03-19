import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      maxWidth: {
        maxima: '1600px',
      },
      gridTemplateRows: {
        app: 'min-content max-content',
      },
      colors: {
        app: '#285430',
        bgApp: '#FAFAFA',
        texApp: '#181C32',
        purpleLite: '#F4FFF3',
        grey: '#C9C9C9',
        greyLite: '#B5B5C3',
      },
      padding: {
        paddingA: '102px',
      },
    },

    plugins: [],
  },
}
export default config
