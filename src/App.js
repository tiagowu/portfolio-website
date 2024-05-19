import Box from "@mui/material/Box";
import { styled } from "@mui/system";

import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AppContainer>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </AppContainer>
  );
};

/* Styled Components */
const AppContainer = styled(Box)(({ theme }) => ({
  minWidth: 320,
  width: "100%",
  margin: 0,
  padding: 0,
  fontFamily: theme.typography.fontFamily,
  WebkitFontSmoothing: theme.typography["-webkit-font-smoothing"],
  MozOsxFontSmoothing: theme.typography["-moz-osx-font-smoothing"],
}));

export default App;
