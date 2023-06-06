import { createTheme } from "@mui/material";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 680,
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default customTheme;
