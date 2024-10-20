import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // background: 'var(--background)',
        // foreground: 'var(--foreground)',
        // 'white-10': 'rgba(255, 255, 255, 0.1)',
        // 'black-80': 'rgba(21, 21, 21, 0.8)',
        // navBackground: '#ffffff',
        // border: '#e5e5e5',
        // text: '#333333',

        ///
        lightBackground: '#ffffff',
        lightForeground: '#000000',
        darkBackground: '#151515',
        darkForeground: '#ededed',
        primary: '#f43333'
      },
      fontFamily: {
        signeton: ['Signeton', 'sans-serif'],
        Magnita: ['Magnita', 'serif']
      },
      transformOrigin: {
        'center-top': 'center top'
      },
      scale: {
        'y-0': 'scaleY(0)'
      }
    }
  },
  plugins: []
}
export default config
