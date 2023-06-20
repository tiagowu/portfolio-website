import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";

import App from "./App";
import customTheme from "./customTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={customTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
