import { aboutData } from "../data/AboutData";

import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutTitle variant="h4">About</AboutTitle>
      <AboutContentBox>
        {aboutData.map((text, index) => (
          <Typography variant="body1" key={index}>
            {text}
          </Typography>
        ))}
      </AboutContentBox>
    </AboutContainer>
  );
};

/* Styled Components */
const AboutContainer = styled(Container)({
  width: "100%",
});

const AboutTitle = styled(Typography)({
  textAlign: "center",
  paddingBottom: 32,
  paddingTop: 72,
});

const AboutContentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  maxWidth: 720,
  gap: 16,
});

export default About;
