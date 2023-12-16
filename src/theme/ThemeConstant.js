const SIZE = {
  xs: "0px",
  sm: "480px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

/* eslint-disable */
export const theme = {
  colors: {
    primaryColor: "#000000", // black
    secondaryColor: "#B8303A", // rich darl red
    tertiaryColor: "#B8303A", // Same rich, dark red (duplicate of secondaryColor)
    primaryLight: "#f0f8ff", // Very light blue (Alice blue)
    secondaryLight: "#f0f8ff", // Very light blue (Alice blue, same as primaryLight)
  },
  breakpoints: {
    xs: `(min-width:${SIZE.xs})`,
    sm: `(max-width:calc(${SIZE.sm} - 0.02px))`,
    md: `(max-width:calc(${SIZE.md} - 0.02px))`,
    lg: `(max-width:calc(${SIZE.lg} - 0.02px))`,
    xl: `(min-width:${SIZE.xl})`,
  },
  font: {
    heading: `'Montserrat', sans-serif`,
    paragraph: `'Open Sans', sans-serif`,
  },
};
