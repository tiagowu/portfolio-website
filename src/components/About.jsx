import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { aboutData } from "../data/AboutData";

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

const AboutTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(4),
  paddingTop: theme.spacing(9),
}));

const AboutContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  maxWidth: 720,
  gap: theme.spacing(2),
}));

export default About;
