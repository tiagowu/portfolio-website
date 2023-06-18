import ContactBox from "./ContactBox";
import ContactForm from "./ContactForm";
import { infoIcons } from "../data/IconsData";

import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const contactInfo = [
  { label: "Email", content: "tiagowu12@gmail.com", icon: infoIcons.email },
  { label: "Github", content: "https://www.github.com/tiagowu", icon: infoIcons.github },
  { label: "LinkedIn", content: "https://www.linkedin.com/in/tiago-wu/", icon: infoIcons.linkedin },
];

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactTitle variant="h4">Contact</ContactTitle>
      <ContactWrapper>
        <ContactContentBox>
          <ContactForm />
          <ContactInfoBox>
            {contactInfo.map(({ label, content, icon }) => (
              <ContactBox key={label} label={label} content={content} icon={icon} />
            ))}
          </ContactInfoBox>
        </ContactContentBox>
      </ContactWrapper>
    </ContactContainer>
  );
};

/* Styled Components */
const ContactContainer = styled(Container)({
  width: "100%",
});

const ContactTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(4),
  paddingTop: theme.spacing(9),
}));

const ContactWrapper = styled(Box)({
  margin: "auto",
  maxWidth: 1000,
});

const ContactContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(4),
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: 4,
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

const ContactInfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  marginTop: theme.spacing(6),
  gap: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(2),
  },
}));

export default Contact;
