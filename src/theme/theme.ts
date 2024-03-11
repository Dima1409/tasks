const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1280,
};

const theme = {
  colors: {
    accentColor: "#78b5f0",
    mainColor: "#083ac4",
    backgroundColor: "#d8f0f0",
    darkColor: "#0c0d0d",
    lightColor: "#f2f5f2",
    validColor: "#329432",
    invalidColor: "#eb2d36",
    disabledColor: "#e1e3e2"
  },
  fonts: {
    hindSiliguri: "'Hind Siliguri', sans-serif",
    roboto: "'Roboto', sans-serif",
  },
  fontSizes: {
    extraSmall: "12px",
    small: "14px",
    normal: "16px",
    bold: "20px",
    extraBold: "28px",
  },
  fontWeight: {
    light: 300,
    normal: 400,
    bold: 700,
  },
  borders: {
    none: "none",
    normal: "1px solid",
    medium: "2px solid",
  },
  radii: {
    none: "0",
    small: "10px",
    normal: "20px",
    round: "50%",
  },
  mq: {
    mobileOnly: `@media screen and (max-width: ${breakpoints.tablet - 0.02}px)`,
    mobile: `@media screen and (min-width: ${breakpoints.mobile}px)`,
    tabletOnly: `@media screen and (min-width: ${
      breakpoints.tablet
    }px) and (max-width: ${breakpoints.desktop - 0.02}px)`,
    tablet: `@media screen and (min-width: ${breakpoints.tablet}px)`,
    notDesktop: `@media screen and (max-width: ${
      breakpoints.desktop - 0.02
    }px)`,
    desktop: `@media screen and (min-width: ${breakpoints.desktop}px)`,
  },
  transitions: {
    durations: {
      default: "300ms",
    }
  },
};

export { theme, breakpoints };
