/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary : "#fff",
        secondary:"#3EEDCF",
        html:"#FF3C3C",
        css:"#4B9EFF",
        javascript:"#FFF857",
        react:"#43FBFB",
        redux:"#C377FF",
        typescript:"#3190FF",
        nextjs:"#FFFFFF",
        sass:"#FF2674",
        figma:"#00b6f7",
        postman:"#ff6c37",
        netlify:"#00c7b7",
        vercel:"#fff",
        vite:"#9566ff",
        material:"#007fff",
        bootstrap:"#563d7c",
        tailwind:"#38b2ac",
        chakra:"#319795"
      },
    },
  },
  plugins: [],
};
