import NavBar from "./NavBar";
import { ReactComponent as Panda } from "../assets/Panda.svg";
import { Box, Container, Typography } from "@mui/material";

const Header = () => {
  return (
    <Container maxWidth={false} sx={{ display: "flex", alignItems: "center", minHeight: "100vh", pt: "72px", backgroundColor: "#232830" }}>
      <NavBar />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection={{ xs: "column", sm: "row" }}
        height="100%"
        sx={{ maxWidth: { xs: "100%", sm: "900px" }, margin: "0 auto" }}
      >
        <Box minWidth={{ xs: "180px", sm: "240px" }} paddingRight={{ sm: "64px" }} paddingBottom={{ xs: "16px", sm: "0px" }}>
          <Panda />
        </Box>
        <Box display="flex" alignItems="flex-start" justifyContent="center" flexDirection="column">
          <Typography sx={{ typography: { xs: "h4", sm: "h3" }, color: "white" }}>Hello!</Typography>
          <Typography sx={{ typography: { xs: "h4", sm: "h3" }, color: "white" }}>I am Tiago Wu.</Typography>
          <Typography sx={{ typography: { xs: "h6" }, color: "lightgray" }}>
            Third-year Computer Science student at Stony Brook University seeking a career in software development.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
