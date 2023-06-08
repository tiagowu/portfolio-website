import React, { useState } from "react";
import ContactBox from "./ContactBox";

import { Container, TextField, Button, Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, message);
  };

  return (
    <Container id="contact" maxWidth={false} sx={{ paddingTop: "72px" }}>
      <Box display="flex" justifyContent="center" mb={4}>
        <Typography variant="h4">Contact</Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box display="flex" border="1px solid black" flexDirection={{ xs: "column", sm: "row" }} justifyContent="center" padding="32px">
          <Box textAlign="center">
            <Typography variant="h5">Contact Me</Typography>
            <form onSubmit={handleSubmit}>
              <TextField label="Name" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} required />
              <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <TextField
                label="Message"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
          </Box>
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
