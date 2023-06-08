import { Box, Typography, Link } from "@mui/material";

const ContactBox = ({ label, content, icon: Icon }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h6" mr={1}>
          {label}
        </Typography>
        <Icon sx={{ fontSize: 40 }} />
      </Box>
      <Typography variant="h6" component="h3">
        {content.startsWith("http") ? (
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
