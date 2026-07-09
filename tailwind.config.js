export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020818',
          900: '#040f2a',
          800: '#071535',
          700: '#0c1f4a',
          600: '#112659',
          500: '#1a3870',
        },
        azure: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        medical: {
          pulse: '#38bdf8',
          alert: '#f87171',
          safe: '#34d399',
          warn: '#fbbf24',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 2s linear infinite',
      }
    }
  },
  plugins: []
}
