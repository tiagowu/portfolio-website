import { useState } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";
import emailjs from "emailjs-com";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;
  const [isFormSent, setIsFormSent] = useState(false);

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
        PUBLIC_KEY
      )
      .then(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setIsFormSent(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Box align="center">
      <Typography variant="h5">Contact Me</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" fullWidth margin="normal" name="name" value={name} onChange={handleChange} required />
        <TextField label="Email" fullWidth margin="normal" name="email" value={email} onChange={handleChange} required />
        <TextField label="Message" fullWidth margin="normal" multiline rows={4} name="message" value={message} onChange={handleChange} required />
        {isFormSent && (
          <Typography variant="body1" color="green" pb={1}>
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
