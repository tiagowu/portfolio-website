import NavBar from "./NavBar";
import { ReactComponent as Panda } from "../assets/Panda.svg";

import { Box, Container, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ResumeIcon from "@mui/icons-material/Description";

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
        <Box display="flex" flexDirection="column">
          <Typography sx={{ typography: { xs: "h4", sm: "h3" }, color: "white" }}>Hello!</Typography>
          <Typography sx={{ typography: { xs: "h4", sm: "h3" }, color: "white" }}>I am Tiago Wu.</Typography>
          <Typography sx={{ typography: { xs: "h6" }, color: "lightgray" }}>
            Third-year Computer Science student at Stony Brook University seeking a career in software development.
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="row">
            <a href="https://www.github.com/tiagowu" target="_blank" rel="noopener noreferrer">
              <IconButton disableRipple>
                <GitHubIcon sx={{ fontSize: "32px" }} />
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/tiago-wu/" target="_blank" rel="noopener noreferrer">
              <IconButton disableRipple>
                <LinkedInIcon sx={{ fontSize: "32px" }} />
              </IconButton>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <IconButton disableRipple>
                <ResumeIcon sx={{ fontSize: "32px" }} />
              </IconButton>
            </a>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
