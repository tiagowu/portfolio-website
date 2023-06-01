import React from "react";
import About from "./components/About";
import Header from "./components/Header";

import customTheme from "./customTheme";
import { ThemeProvider } from "@emotion/react";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Header />
      <About />
    </ThemeProvider>
  );
};

export default App;
