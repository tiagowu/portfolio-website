import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

import NavButtons from "./NavButtons";

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
      <Typography variant="body1">©2024 Tiago Wu</Typography>
    </FooterContainer>
  );
};

/* Styled Components */
const FooterContainer = styled(Container)(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing(4),
}));

export default Footer;
