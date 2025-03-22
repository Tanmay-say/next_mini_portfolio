module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          indigo: {
            100: '#e0e7ff',
            600: '#4f46e5',
            700: '#4338ca',
          },
        },
        boxShadow: {
          'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        },
        transitionProperty: {
          'transform-shadow': 'transform, box-shadow',
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }