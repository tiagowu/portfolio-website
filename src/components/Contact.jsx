import ContactBox from "./ContactBox";
import ContactForm from "./ContactForm";
import { infoIcons } from "../data/IconsData";

import { Container, Box, Typography, useTheme } from "@mui/material";

const Contact = () => {
  const theme = useTheme();

  const renderContactBoxes = () => {
    return (
      <>
        <ContactBox label="Email" content="tiagowu12@gmail.com" icon={() => infoIcons.email} />
        <ContactBox label="Github" content="https://www.github.com/tiagowu" icon={() => infoIcons.github} />
        <ContactBox label="LinkedIn" content="https://www.linkedin.com/in/tiago-wu/" icon={() => infoIcons.linkedin} />
      </>
    );
  };

  return (
    <Container id="contact" maxWidth={false}>
      <Typography variant="h4" align="center" pt={9} pb={4}>
        Contact
      </Typography>
      <Box margin="auto" maxWidth={1300}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="center"
          p={4}
          border={`1px solid ${theme.palette.primary.main}`}
          borderRadius={1}
        >
          <ContactForm />
          <Box display="flex" flexDirection="column" align="center" pl={{ sm: "16px" }} mt={6} gap={4}>
            {renderContactBoxes()}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
