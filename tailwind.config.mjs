/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pouch: {
          ink: '#000000',
          surface: '#0E0E10',
          card: '#141417',
          cardHover: '#1A1A1E',
          line: 'rgba(255,255,255,0.06)',
          lineSolid: '#1F1F23',
          text: '#EFEFEF',
          textSoft: '#B6B6BA',
          textMuted: '#7E7E83',
          textDim: '#525258',
          red: '#FA3454',
          redSoft: '#FF6B85',
          redDeep: '#E62A48',
          peach: '#F2C2C9',
          peachSoft: '#F7E0DF',
        },
      },
      fontFamily: {
        sans: [
          'Google Sans Flex',
          'Google Sans',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter2: '-0.035em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fanIn: {
          '0%': { transform: 'translateX(0) rotate(0deg)', opacity: '0' },
          '100%': { transform: 'translateX(var(--tw-fan-x, 0)) rotate(var(--tw-fan-r, 0))', opacity: '1' },
        },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
