import { IconButton, Link } from "@mui/material";
import { styled } from "@mui/system";

const LinkButton = ({ link, icon: Icon, iconProps }) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <LinkIconButton disableRipple>
        <Icon sx={{ fontSize: iconProps.fontSize }} />
      </LinkIconButton>
    </Link>
  );
};

/* Styled Components */
const LinkIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  borderRadius: 8,
  padding: 4,
}));

export default LinkButton;
