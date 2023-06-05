import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import customTheme from "./customTheme";
import { ThemeProvider } from "@emotion/react";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Header />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
