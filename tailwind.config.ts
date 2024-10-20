import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // Enable dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        lightBackground: 'var(--lightBackground)',
        lightForeground: 'var(--lightForeground)',
        darkBackground: 'var(--darkBackground)',
        darkForeground: 'var(--darkForeground)',
        primary: '#f43333' // Using a static color for the primary
      },
      fontFamily: {
        signeton: ['Signeton', 'sans-serif'],
        magnita: ['Magnita', 'serif']
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
