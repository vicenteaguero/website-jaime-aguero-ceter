/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src_v1/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#264954",
          soft: "#3a6675",
          ink: "#1a3540"
        },
        secondary: "#d0d6e0",
        bg: "#f4f4f9",
        ink: {
          DEFAULT: "#333333",
          soft: "#5a5a5a"
        },
        paper: "#dfdff0",
        whatsapp: {
          DEFAULT: "#25d366",
          dark: "#128c7e"
        }
      },
      fontFamily: {
        body: ["Lato", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["Montserrat", "system-ui", "-apple-system", "Segoe UI", "sans-serif"]
      },
      fontSize: {
        "fluid-xs": "clamp(0.875rem, 0.8rem + 0.4vw, 1rem)",
        "fluid-sm": "clamp(1rem, 0.95rem + 0.4vw, 1.125rem)",
        "fluid-base": "clamp(1.05rem, 0.95rem + 0.5vw, 1.2rem)",
        "fluid-lg": "clamp(1.25rem, 1rem + 1vw, 1.5rem)",
        "fluid-xl": "clamp(1.5rem, 1.2rem + 1.5vw, 2rem)",
        "fluid-2xl": "clamp(2rem, 1.5rem + 2.5vw, 2.5rem)",
        "fluid-hero": "clamp(2.5rem, 2rem + 4vw, 4rem)"
      },
      spacing: {
        "section-y": "clamp(3rem, 6vw, 6rem)",
        "section-x": "clamp(1rem, 4vw, 2rem)"
      },
      maxWidth: {
        content: "800px",
        shell: "1200px"
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.4, 0, 0.2, 1)"
      },
      screens: {
        xs: "480px"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
        "slide-down": "slide-down 0.4s ease-out both"
      }
    }
  },
  plugins: []
};
