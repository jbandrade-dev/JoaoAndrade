/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        source: "var(--font-source)",
        roboto: ["var(--font-roboto)"],
      },
      screens: {
        mob: "100px",
        tablet: "600px",
        pc: "900px",
      },
      fontSize: {
        "3xs": 10,
        "2xs": 12,
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 21,
        "2xl": 32,
      },

      colors: {
        base: {
          title: "#272221",
          subtitle: "#403937",
          text: "#574F4D",
          label: "#8D8686",
          hover: "#D7D5D5",
          button: "#E6E5E5",
          input: "#EDEDED",
          card: "#F3F2F2",
          background: "#FAFAFA",
          hr: "#E6E5E5",
          purple: "#8047F8",
          "purple-light": "#EBE5F9",
          "purple-dark": "#4B2995",
        },
        boxShadow: {
          custom: "0px 7px 29px rgba(100, 100, 111, 0.2)",
        },
      },
    },
  },
  plugins: [],
};
