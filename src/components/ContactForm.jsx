import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import emailjs from "emailjs-com";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        USER_ID
      )
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
        setIsEmailSent(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
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
        {isEmailSent && (
          <Typography variant="body1" pb="8px">
            Message successfully sent!
          </Typography>
        )}
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
