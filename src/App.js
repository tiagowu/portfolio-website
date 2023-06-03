import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";

import customTheme from "./customTheme";
import { ThemeProvider } from "@emotion/react";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Header />
      <About />
      <Education />
      <Skills />
    </ThemeProvider>
  );
};

export default App;
