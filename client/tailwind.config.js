/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      container: {
        center:true
      },
      extend: {
      },
    },
    plugins: [
      require('daisyui'),
    ],
    daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#629460",
            "primary-content": "#ffffff",
            "seconday": "#629460",
            "accent": "#629460",
            "neutral": "#629460",
            "base-100": "#ffffff",
      }}
      ],
      base: true,
      styled: true,
      utils: true,
      prefix: "",
      logs: true,
      themeRoot:":root",
    },
  }