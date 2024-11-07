import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: '#FFB6C1',
        pastelYellow: '#FFE4B5',
        mintGreen: '#98FB98',
        pastelBlue: '#F0F8FF',
        darkGray: '#2F4F4F',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  
        lobster: ['Lobster', 'cursive'],  
        poppins: ['Poppins', 'sans-serif'], 
        nunito: ['Nunito', 'sans-serif'],  
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
