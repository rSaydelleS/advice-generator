import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'cyan': 'hsl(193, 38%, 86%)',
        'neon': 'hsl(150, 100%, 66%)',
        'darkb': 'hsl(218, 23%, 16%)',
        'grayish': 'hsl(217, 19%, 24%)'
      },
      fontFamily: {
        sans:['Mansrope', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
