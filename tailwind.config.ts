import type { Config } from "tailwindcss";

const config: Config = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        '1024Down':{ 'max': "1024px" },
        '600': "600px",
        'phones': { 'max': "639px" },
        '350':  "350px" ,
        '760': "760",
        '1400':"1400px",
        '1535': { 'max': "1535px" },
      },
    },
  },
  plugins: [],
};
export default config;


