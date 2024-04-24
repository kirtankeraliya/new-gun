module.exports = {
  content: ["./**/**/*.{html,js}","./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: '#E7600E',
        liteorange:"#E7600ED9",
        grey:"#242D1C",
        beigeone:"#F2EBE2",
        beigetwo:"#D9D4CA",
        green:"#149688",
        darkgreen:"#0E8376",
        red:"#B01C1C",
        yellow:"#EEB547",
        lightblack:"#F2EBE280"
      },
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
        'capi':['CapitoliumNews2','sans-serif']
      },
      spacing: {
        30: "30px",
        38:"38px"
      },
      fontSize: {
        70:"70px",
        50:"50px"
      },
      lineHeight: {
       84:"84px",
       62:"62px",
       22:"22px"
      },
    },
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
      },
    },
  },
  variants: {},
  plugins: [],
}
