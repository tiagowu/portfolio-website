import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";

const ContactBox = ({ label, content, icon: Icon }) => {
  return (
    <StyledBox>
      <Header>
        <Typography variant="h6">{label}</Typography>
        {Icon && <Icon />}
      </Header>
      <Link href={label !== "Email" ? content : `mailto:${content}`} variant="h6" noWrap>
        {label !== "Email" ? content.substring(content.indexOf(".") + 1) : content}
      </Link>
    </StyledBox>
  );
};

/* Styled Components */
const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: 4,
}));

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: theme.spacing(1),
}));

export default ContactBox;
