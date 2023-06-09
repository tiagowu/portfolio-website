import ContactBox from "./ContactBox";
import ContactForm from "./ContactForm";

import { Container, Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <Container id="contact" maxWidth={false} paddingTop="72px" textAlign="center">
      <Typography variant="h4">Contact</Typography>
      <Box display="flex" justifyContent="center">
        <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} justifyContent="center" padding="32px" border="1px solid black">
          <ContactForm />
          <Box display="flex" flexDirection="column" ml={{ sm: "16px" }} mt="48px" gap="32px">
            <ContactBox label="Email" content="tiagowu12@gmail.com" icon={EmailIcon} />
            <ContactBox label="Github" content="https://www.github.com/tiagowu" icon={GitHubIcon} />
            <ContactBox label="LinkedIn" content="https://www.linkedin.com/in/tiago-wu/" icon={LinkedInIcon} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
