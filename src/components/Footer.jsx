import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <Typography variant="h6">©2023 Tiago Wu</Typography>
    </FooterContainer>
  );
};

/* Styled Components */
const FooterContainer = styled(Container)(() => ({
  textAlign: "center",
  paddingTop: 36,
}));

export default Footer;
