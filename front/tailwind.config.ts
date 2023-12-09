import type { Config } from 'tailwindcss'

const config: Config = {
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FF1B6D",
                  
          "secondary": "#748FB5",
                  
          "accent": "#2C353D",
                  
          "neutral": "#fff",
                  
          "base-100": "#ffffff",
                  
          "info": "#00ebff",
                  
          "success": "#8ebf00",
                  
          "warning": "#c71600",
                  
          "error": "#ffa4aa",

          },
        },
      ],
    },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Poppins: ['Poppins' ,'sans-serif'],
      },
      screens: {
        // '2xl': [{'max' : '2560px'}],
        // 'xl': '1400px',
        '3xl': [{'min' : '2559px'}],
        '2xl': [{'min' : '1919px'}],
        'xl': [{'min' : '1439px'}],
        'l': [{'min' : '1024px'}],
        'Labtop': [{'min' : '768px'}],
        'Ipad': [{'min' : '480'}],
        'Mobile': [{'min' : '319'}],
      },
      colors: {
        'primary': {
          DEFAULT: '#FF1B6D',
          50: '#FFD3E3',
          100: '#FFBED6',
          200: '#FF95BB',
          300: '#FF6DA1',
          400: '#FF4487',
          500: '#FF1B6D',
          600: '#E20051',
          700: '#AA003D',
          800: '#720029',
          900: '#3A0015',
          950: '#1E000B'
        },
        'secondary': {
          DEFAULT: '#748FB5',
          50: '#ECF0F5',
          100: '#DFE5EE',
          200: '#C4CFE0',
          300: '#A9BAD1',
          400: '#8FA4C3',
          500: '#748FB5',
          600: '#54729D',
          700: '#405879',
          800: '#2D3D54',
          900: '#19222F',
          950: '#0F151D'
        },
        "accent": "#00abf3",
        "neutral": "#000000",
        "base-100": "#ffffff",
        "info": "#2F2F2F",
        "success": "#0FA461",
        "warning": "#D2140A",
        "error": "#ffffff",
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
