import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: ["docs/content/**/*.md"],
  theme: {
    extend: {
      colors: {
        fountain: {
          50: "#eefdfd",
          100: "#d5f8f8",
          200: "#b0eff1",
          300: "#79e3e7",
          400: "#3bccd5",
          500: "#1fadb7",
          600: "#1d8e9d",
          700: "#1e7380",
          800: "#215e69",
          900: "#204f59",
          950: "#0f343d",
        },
      },
    },
  },
};
