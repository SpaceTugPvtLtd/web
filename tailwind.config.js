/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { backgroundImage: {
      // 'shade-1' : "url('/src/assets/shade1.jpg')",
      // 'shade-2' : "url('/src/assets/shade2.jpg')",
     
    },
    },

  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};

