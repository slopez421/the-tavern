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
            "seconday": "#1f261a",
            "secondary-content": "#d8dbc8",
            "accent": "#A07856",
            "accent-content": "#090502",
            "neutral": "#CBB799",
            "neutral-content": "#0f0c08",
            "base-100": "#ffffff",
            "base-200": "#dedede",
            "base-content": "#161616",
            "info": "#5e734e",
            "info-content": "#dde2d9",
            "success": "#c1d0b5",
            "success-content": "#0d1510",
            "warning": "#dd855c",
            "warning-content": "#0f0c08",
            "error": "#7f1d1d",
            "error-content": "#ffffff",
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