import ContactBox from "./ContactBox";
import ContactForm from "./ContactForm";
import { infoIcons } from "../data/IconsData";

import { Box, Container, Typography } from "@mui/material";

const contactInfo = [
  { label: "Email", content: "tiagowu12@gmail.com", icon: infoIcons.email },
  { label: "Github", content: "https://www.github.com/tiagowu", icon: infoIcons.github },
  { label: "LinkedIn", content: "https://www.linkedin.com/in/tiago-wu/", icon: infoIcons.linkedin },
];

const Contact = () => {
  return (
    <Container id="contact" maxWidth={false}>
      <Typography variant="h4" align="center" pt={9} pb={4}>
        Contact
      </Typography>
      <Box margin="auto" maxWidth={1000}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="center"
          p={4}
          border={2}
          borderRadius={4}
          borderColor="primary.main"
        >
          <ContactForm />
          <Box display="flex" flexDirection="column" align="center" pl={{ sm: "16px" }} mt={6} gap={4}>
            {contactInfo.map(({ label, content, icon }) => (
              <ContactBox key={label} label={label} content={content} icon={icon} />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
