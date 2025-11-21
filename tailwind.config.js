/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f2f9ff',
          100: '#d9edff',
          200: '#b0d8ff',
          300: '#7abaff',
          400: '#4294ff',
          500: '#1f6fff',
          600: '#0e4bdb',
          700: '#103ab1',
          800: '#122f89',
          900: '#142a6d',
        },
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at center, rgba(66,148,255,0.25), transparent 55%), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      boxShadow: {
        'glow-blue': '0 0 60px rgba(66,148,255,0.45)',
      },
    },
  },
  plugins: [],
}

