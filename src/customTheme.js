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
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "primary",
          textDecoration: "underline",
          "&:hover": {
            color: "none",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#3770B3",
            borderWidth: "2px",
          },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#3770B3",
          },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#3770B3",
          },
          "& .MuiOutlinedInput-input:-webkit-autofill": {
            WebkitTextFillColor: "white",
            WebkitBackgroundClip: "text",
            backgroundClip: "text !important",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#3770B3",
    },
    background: {
      default: "#232830",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      '"Fira Sans"',
      '"Droid Sans"',
      '"Helvetica Neue"',
      "sans-serif",
    ].join(","),
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },
});

export default customTheme;
