/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f8ff',
          100: '#e0f1fe',
          200: '#bae3fd',
          300: '#7dcbfc',
          400: '#38aaf7',
          500: '#0e8de4',
          600: '#0070cc',
          700: '#0059a6',
          800: '#004c8a',
          900: '#004072',
          950: '#002951',
        },
        secondary: {
          50: '#f2fcfb',
          100: '#d4f7f3',
          200: '#a8ede8',
          300: '#6edcd8',
          400: '#3cc2c1',
          500: '#24a3a4',
          600: '#1e8a8c',
          700: '#1c6f71',
          800: '#1b595b',
          900: '#1a4a4c',
          950: '#072e2f',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd1',
          200: '#ffdaa4',
          300: '#ffbf6b',
          400: '#ff9a31',
          500: '#ff7a0d',
          600: '#ff5d00',
          700: '#cc4403',
          800: '#a1360c',
          900: '#82310e',
          950: '#461604',
        },
        success: {
          50: '#effef7',
          100: '#dafeef',
          200: '#b6fbdd',
          300: '#7ff5c3',
          400: '#43e5a0',
          500: '#1acd81',
          600: '#0fa968',
          700: '#108656',
          800: '#126a46',
          900: '#11573b',
          950: '#03301f',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('https://images.pexels.com/photos/8347499/pexels-photo-8347499.jpeg')",
      },
    },
  },
  plugins: [],
};