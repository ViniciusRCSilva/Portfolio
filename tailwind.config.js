/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif']
      },
      boxShadow: {
        middle: "0 0 15px"
      },
      animation: {
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'subtle-shift': 'subtle-shift 8s linear infinite',
        'pulse': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'subtle-shift': {
          '0%': {
            'transform': 'translateX(0) translateY(0)'
          },
          '100%': {
            'transform': 'translateX(-60px) translateY(-60px)'
          }
        },
        'pulse': {
          '0%, 100%': {
            opacity: '0.2',
          },
          '50%': {
            opacity: '0.15',
          },
        },
        'grain': {
          '0%, 100%': {
            transform: 'translate(0, 0)',
          },
          '10%': {
            transform: 'translate(-5%, -10%)',
          },
          '20%': {
            transform: 'translate(-15%, 5%)',
          },
          '30%': {
            transform: 'translate(7%, -25%)',
          },
          '40%': {
            transform: 'translate(-5%, 25%)',
          },
          '50%': {
            transform: 'translate(-15%, 10%)',
          },
          '60%': {
            transform: 'translate(15%, 0%)',
          },
          '70%': {
            transform: 'translate(0%, 15%)',
          },
          '80%': {
            transform: 'translate(3%, 35%)',
          },
          '90%': {
            transform: 'translate(-10%, 10%)',
          },
        },
      },
    },
  },
  plugins: [],
}
