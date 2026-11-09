/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Warm, premium neutrals
        ink: {
          950: '#14110f',
          900: '#1c1917',
          800: '#292524',
          700: '#44403c',
          600: '#57534e',
          500: '#78716c',
          400: '#a8a29e',
          300: '#d6d3d1',
          200: '#e7e5e4',
          100: '#f5f4f2',
        },
        cream: {
          50: '#faf8f5',
          100: '#f4f1ec',
          200: '#e9e4dc',
        },
        // Single refined accent (muted terracotta / clay)
        accent: {
          DEFAULT: '#b45309',
          50: '#fdf6ee',
          100: '#f9e8d5',
          200: '#f0cfa8',
          300: '#e3ad78',
          400: '#d18a4f',
          500: '#b45309',
          600: '#9a4708',
          700: '#7c3a0a',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(20,17,15,0.04), 0 8px 24px rgba(20,17,15,0.06)',
        lift: '0 2px 4px rgba(20,17,15,0.05), 0 16px 40px rgba(20,17,15,0.10)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
