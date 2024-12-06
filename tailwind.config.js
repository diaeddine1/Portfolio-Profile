/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      skew:{
        "180":"30deg",
      },
      colors:{
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
        "halfsvh":"100svh",
      },
      lineClamp: {
        10: '10',
      },
    },
  },
  plugins: [],
}

