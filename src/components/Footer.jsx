import NavButtons from "./NavButtons";

import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Footer = () => {
  const navigations = [
    { id: "about", label: "ABOUT" },
    { id: "education", label: "EDUCATION" },
    { id: "projects", label: "PROJECTS" },
    { id: "skills", label: "SKILLS" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <FooterContainer id="footer">
      <NavButtons navigations={navigations} />
      <Typography variant="h6">©2023 Tiago Wu</Typography>
    </FooterContainer>
  );
};

/* Styled Components */
const FooterContainer = styled(Container)(() => ({
  textAlign: "center",
  paddingTop: 36,
}));

export default Footer;
