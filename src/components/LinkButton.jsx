import { IconButton, Link } from "@mui/material";
import { styled } from "@mui/system";

const LinkButton = ({ link, icon: Icon, iconProps }) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <StyledButton disableRipple>
        <Icon sx={{ fontSize: iconProps.fontSize }} />
      </StyledButton>
    </Link>
  );
};

/* Styled Components */
const StyledButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  borderRadius: 8,
  padding: 4,
}));

export default LinkButton;
