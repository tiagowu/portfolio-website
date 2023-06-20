import Container from "@mui/material/Container";
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
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </AppContainer>
  );
};

/* Styled Components */
const AppContainer = styled(Container)(({ theme }) => ({
  minWidth: 320,
  margin: 0,
  padding: 0,
  fontFamily: theme.typography.fontFamily,
  WebkitFontSmoothing: theme.typography["-webkit-font-smoothing"],
  MozOsxFontSmoothing: theme.typography["-moz-osx-font-smoothing"],
}));

export default App;
