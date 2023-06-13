import ContactBox from "./ContactBox";
import ContactForm from "./ContactForm";
import { infoIcons } from "../data/IconsData";

import { Container, Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Container id="contact" maxWidth={false} sx={{ pt: "72px" }}>
      <Typography variant="h4" align="center" paddingBottom="32px">
        Contact
      </Typography>
      <Box margin="auto" maxWidth="1300px">
        <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} justifyContent="center" padding="32px" border="1px solid black">
          <ContactForm />
          <Box display="flex" flexDirection="column" ml={{ sm: "16px" }} mt="48px" gap="32px">
            <ContactBox label="Email" content="tiagowu12@gmail.com" icon={() => infoIcons.email} />
            <ContactBox label="Github" content="https://www.github.com/tiagowu" icon={() => infoIcons.github} />
            <ContactBox label="LinkedIn" content="https://www.linkedin.com/in/tiago-wu/" icon={() => infoIcons.linkedin} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
