/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding:".75rem"
    },
    extend: {
      fontFamily: {
        azeret: ["Azeret Mono"],
        montserrat: ["Montserrat"],
        notoSans: ["Noto Sans"]
      },
      colors: {
        transparent: "transparent",
        primary: "#62DB54", // 綠色
        secondary: "#09ACF5", // 藍色
        dark: {
          primary: "#1C1C1C", // 黑色, 主要背景
          secondary: "#2D2D2D", //深灰色, 次要背景
          text: "#494755", // 深灰色, 文字
          border: "#C1C1C1", // 淺灰色, border
        },
      },
    },
  },
  plugins: [
   
  ],
}