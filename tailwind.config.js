/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('./src/assets/bg-image.png')",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#7B61FF",
        body: "#161414",
        "theme-body-mute": "#979797",
        "theme-body": "#161414",
        primary_muted: "#F6F4FF",
      },
    },
  },
  plugins: [],
};
