import NavBar from "./NavBar";
import { ReactComponent as Panda } from "../assets/Panda.svg";

import { Box, Container, Typography } from "@mui/material";

const Header = () => {
  return (
    <Container maxWidth={false} sx={{ height: "100vh", pt: "72px" }}>
      <NavBar />
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection={{ xs: "column", sm: "row" }} height="100%">
        <Box minWidth={{ xs: "180px", sm: "240px", xl: "360px" }} paddingRight={{ sm: "64px" }} paddingBottom={{ xs: "16px", sm: "0px" }}>
          <Panda />
        </Box>
        <Box display="flex" alignItems="flex-start" justifyContent="center" flexDirection="column" maxWidth={{ xs: "600px", xl: "900px" }}>
          <Typography sx={{ typography: { xs: "h4", sm: "h3" } }}>Hello!</Typography>
          <Typography sx={{ typography: { xs: "h4", sm: "h3", xl: "h2" } }}>I am Tiago Wu.</Typography>
          <Typography sx={{ typography: { xs: "h6", xl: "h4" } }}>
            Third-year Computer Science student at Stony Brook University seeking a career in software development.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
