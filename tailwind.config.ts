// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         fadeOut: {
//           '0%': { opacity: '1' },
//           '100%': { opacity: '0' },
//         },
//         pulseSoft: {
//           '0%, 100%': { opacity: '1' },
//           '50%': { opacity: '0.4' },
//         },
//       },
//       colors: {	
//         somnologyDarkBlue: '#073644',
//       },
//       animation: {
//         fadeIn: 'fadeIn 1s ease-out forwards',
//         fadeOut: 'fadeOut 1s ease-in forwards',
//         pulseSoft: 'pulseSoft 2s ease-in-out infinite',
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;
// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        testBlue: "#B8DFE4",
      },
      animation: {
        pulseSoft: 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;