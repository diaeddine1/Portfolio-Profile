/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "poppins-regular":["Poppins", 'sans-serif'],
      },
      skew:{
        "180":"30deg",
      },
      colors:{
        '6DAAF2':"#6DAAF2",
        '4CC9F0':"#4CC9F0",
        '4895EF':"#4895EF",
        '4361EE':'#4361EE',
        '3A0CA3':"#3A0CA3",
        "480CA8":"#480CA8",
      },
      width:{
        halfscreen:{
          "halfsvw":"50svw",
          "thirdsvw":"33svw"
        }
      },
      height:{
        "halfsvh":"50svh",
        "twothirds":"75svh",
        "eightyfire":"85svh"
      },
      lineClamp: {
        10: '10',
      },
    },
  },
  plugins: [],
}

