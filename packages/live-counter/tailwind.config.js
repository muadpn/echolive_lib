const { blackA, mauve, green, bronze, brown } = require("@radix-ui/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scaleIn: "scaleIn 200ms ease",
        scaleOut: "scaleOut 200ms ease",
        fadeIn: "fadeIn 200ms ease",
        fadeOut: "fadeOut 200ms ease",
        enterFromLeft: "enterFromLeft 250ms ease",
        enterFromRight: "enterFromRight 250ms ease",
        exitToLeft: "exitToLeft 250ms ease",
        exitToRight: "exitToRight 250ms ease",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundColor: ["hover"],
      backgroundImage: ["hover"],

      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      textColor: {
        "warm-1": "var(--warm-1)",
        "warm-2": "var(--warm-2)",
        "warm-3": "var(--warm-3)",
        "warm-4": "var(--warm-4)",
      },
      gridTemplateColumns: {
        fit: "repeat(auto-fit, minmax(120px, 1fr))",
        fill: "repeat(auto-fill,  minmax(120px, 1fr))",
        "item-grid": "repeat(1, minmax(120px, 1fr))", // base style
        "item-grid-sm": "repeat(auto-fill, minmax(280px, 1fr))", // for screens >= 480px
        "item-grid-md": "repeat(auto-fill, minmax(320px, 1fr))", // for screens >= 768px
        "item-grid-lg": "repeat(3, minmax(220px, 1fr))", // for screens >= 1100px
        "item-grid-xl": "repeat(4, minmax(220px, 1fr))", // for screens >= 1440px
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ...blackA,
        ...mauve,
        ...brown,
        ...green,
        ...bronze,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        enterFromRight: {
          from: { opacity: "0", transform: "translateX(200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: "0", transform: "translateX(-200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    // animation: {
    //   scaleIn: "scaleIn 200ms ease",
    //   scaleOut: "scaleOut 200ms ease",
    //   fadeIn: "fadeIn 200ms ease",
    //   fadeOut: "fadeOut 200ms ease",
    //   enterFromLeft: "enterFromLeft 250ms ease",
    //   enterFromRight: "enterFromRight 250ms ease",
    //   exitToLeft: "exitToLeft 250ms ease",
    //   exitToRight: "exitToRight 250ms ease",
    //   "accordion-down": "accordion-down 0.2s ease-out",
    //   "accordion-up": "accordion-up 0.2s ease-out",
    // },
  },
  presets: [require("./src/theme/theme")],
  plugins: [require("tailwindcss-animate")],
};
