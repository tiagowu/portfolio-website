import { aboutData } from "../data/AboutData";

import { Box, Container, Typography } from "@mui/material";

const About = () => {
  const renderAboutText = () => {
    return aboutData.map((text, index) => <Typography key={index}>{text}</Typography>);
  };

  return (
    <Container id="about" sx={{ paddingTop: "72px" }}>
      <Typography variant="h4" align="center" pb="32px">
        About
      </Typography>
      <Box display="flex" flexDirection="column" margin="auto" maxWidth="720px" gap="16px">
        {renderAboutText()}
      </Box>
    </Container>
  );
};

export default About;
