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
    <StyledContainer id="contact">
      <StyledTitle variant="h4">Contact</StyledTitle>
      <StyledWrapper>
        <StyledFormBox>
          <ContactForm />
          <StyledInfoBox>
            {contactInfo.map(({ label, content, icon }) => (
              <ContactBox key={label} label={label} content={content} icon={icon} />
            ))}
          </StyledInfoBox>
        </StyledFormBox>
      </StyledWrapper>
    </StyledContainer>
  );
};

/* Styled Components */
const StyledContainer = styled(Container)({
  width: "100%",
});

const StyledTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(4),
  paddingTop: theme.spacing(9),
}));

const StyledWrapper = styled(Box)({
  margin: "auto",
  maxWidth: 1000,
});

const StyledFormBox = styled(Box)(({ theme }) => ({
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

const StyledInfoBox = styled(Box)(({ theme }) => ({
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
