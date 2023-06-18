import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";

const ContactBox = ({ label, content, icon: Icon }) => {
  return (
    <ContactWrapper>
      <ContactLabel>
        <Typography variant="h6">{label}</Typography>
        {Icon && <Icon />}
      </ContactLabel>
      <Link href={label !== "Email" ? content : `mailto:${content}`} variant="body1" noWrap>
        {label !== "Email" ? content.substring(content.indexOf(".") + 1) : content}
      </Link>
    </ContactWrapper>
  );
};

/* Styled Components */
const ContactWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: 4,
}));

const ContactLabel = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  color: "white",
}));

export default ContactBox;
