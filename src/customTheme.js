import { createTheme } from "@mui/material";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default customTheme;
