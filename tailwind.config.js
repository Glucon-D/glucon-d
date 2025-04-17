/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#FF7A00', // Main brand color
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-blue-900/20',
    'border-blue-500',
    'bg-cyan-900/20',
    'border-cyan-500',
    'bg-gray-900/20',
    'border-gray-500',
    'bg-purple-900/20',
    'border-purple-500',
    'bg-green-900/20',
    'border-green-500',
    'bg-red-900/20',
    'border-red-500',
    'bg-yellow-900/20',
    'border-yellow-500',
  ]
}
