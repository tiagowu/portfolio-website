import { useState } from "react";
import emailjs from "emailjs-com";

import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../config";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (event) => {
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
        setIsFormSubmitted(true);
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
    <ContactFormContainer>
      <Typography variant="h5">Contact Me</Typography>
      <form id="contact-form" onSubmit={handleFormSubmit}>
        <ContactFormInput label="Name" margin="normal" name="name" value={name} onChange={handleChange} autoComplete="new-password" required />
        <ContactFormInput label="Email" margin="normal" name="email" value={email} onChange={handleChange} autoComplete="new-password" required />
        <ContactFormInput label="Message" margin="normal" name="message" value={message} onChange={handleChange} multiline rows={4} required />
        {isFormSubmitted && <ContactFormMessage variant="body1">Message successfully sent!</ContactFormMessage>}
        <ContactFormButton variant="contained" type="submit">
          Send Message
        </ContactFormButton>
      </form>
    </ContactFormContainer>
  );
};

/* Styled Components */
const ContactFormContainer = styled(Box)({
  textAlign: "center",
  width: "100%",
});

const ContactFormInput = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(1),
}));

const ContactFormMessage = styled(Typography)(({ theme }) => ({
  color: "green",
  paddingBottom: theme.spacing(1),
}));

const ContactFormButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

export default ContactForm;
