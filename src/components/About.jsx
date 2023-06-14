import { aboutData } from "../data/AboutData";

import { Box, Container, Typography } from "@mui/material";

const About = () => {
  const renderAboutText = () => {
    return aboutData.map((text, index) => <Typography key={index}>{text}</Typography>);
  };

  return (
    <Container id="about">
      <Typography variant="h4" align="center" pt={9} pb={4}>
        About
      </Typography>
      <Box display="flex" flexDirection="column" margin="auto" maxWidth={720} gap={2}>
        {renderAboutText()}
      </Box>
    </Container>
  );
};

export default About;
