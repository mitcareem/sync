"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    regular: {
      fontSize: "1.4rem",
      lineHeight: "2.4rem",
      "@media (min-width:1440px)": {
        fontSize: "1.6rem",
        lineHeight: "2.4rem",
      },
    },
    medium: {
      fontSize: "1.6rem",
      lineHeight: "2.4rem",
      "@media (min-width:1440px)": {
        fontSize: "1.8rem",
        lineHeight: "2.4rem",
      },
    },
    h1: {
      fontSize: "4.8rem",
      lineHeight: "7.48rem",
      "@media (min-width:1440px)": {
        fontSize: "6.8rem",
        lineHeight: "7.48rem",
      },
    },
    text: {
      fontSize: "1.2rem",
      lineHeight: "1.65rem",
      "@media (min-width:1440px)": {
        fontSize: "1.4rem",
        lineHeight: "1.65rem",
      },
    },
    logo: {
      fontSize: "1.9rem",
      lineHeight: "2.2rem",
      "@media (min-width:1440px)": {
        fontSize: "1.9rem",
        lineHeight: "2.2rem",
      },
    },
  },
  palette: {
    background: {
      default: "#000000",
    },
    primary: {
      main: "#1B1B1B",
    },
    bgcolor: {
      main: "#000000",
    },
    fontlight: {
      main: "#ffffff",
    },
    fontdim: {
      main: "#3e5056",
    },
    bordercolor: {
      main: "#3e5056",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;
