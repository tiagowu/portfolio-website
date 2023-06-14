import { Box, Typography, Link, useTheme } from "@mui/material";

const ContactBox = ({ label, content, icon: Icon }) => {
  const theme = useTheme();

  return (
    <Box display="flex" flexDirection="column" p="16px" border={`1px solid ${theme.palette.primary.main}`} borderRadius={1}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h6" mr={1}>
          {label}
        </Typography>
        <Icon />
      </Box>
      <Typography variant="h6" component="h3" whiteSpace={{ sm: "nowrap" }}>
        {label !== "Email" ? (
          <Link href={content} target="_blank" rel="noopener noreferrer">
            {content.substring(content.indexOf(".") + 1)}
          </Link>
        ) : (
          <Link href={`mailto:${content}`}>{content}</Link>
        )}
      </Typography>
    </Box>
  );
};

export default ContactBox;
