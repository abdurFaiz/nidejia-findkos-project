/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#FF9357",
        secondary: "#323437",
        text_paragraph: "#a8a8ab",
        gradient_card: "#050211",
        bg_dark_card: "#202020",
        input_placeholder: "#7D7B91",
        grey: "#353535",
        dark: "#141414	",
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
