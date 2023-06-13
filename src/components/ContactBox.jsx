import { Box, Typography, Link } from "@mui/material";

const ContactBox = ({ label, content, icon: Icon }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" border="1px solid black" padding="16px">
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
