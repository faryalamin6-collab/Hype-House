import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'electric-violet': '#9f01f6',
        'royal-blue': '#021FC3',
        'deep-navy': '#080031',
        'pure-black': '#04001A',
        'bg-start': '#020008',
        'bg-end': '#0c0026',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(135deg, #C084FC, #818CF8, #049DFF, #34D399)',
        'space-gradient': 'linear-gradient(180deg, #020008 0%, #0c0026 100%)',
        'card-gradient':
          'linear-gradient(135deg, rgba(159,1,246,0.08) 0%, rgba(2,31,195,0.08) 100%)',
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
        ticker: 'ticker 32s linear infinite',
        'ticker-slow': 'ticker 90s linear infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.2,0.8,0.2,1) forwards',
        'spin-slow': 'spin 8s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
