import NavBar from "./NavBar";
import { ReactComponent as Panda } from "../assets/Panda.svg";

import { Box, Container, Typography } from "@mui/material";

const Header = () => {
  return (
    <Container sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <NavBar />
      <Box sx={{ width: 300, textAlign: "center" }}>
        <Panda />
        <Typography variant="h5">Hello!</Typography>
        <Typography variant="h5">I am Tiago Wu</Typography>
      </Box>
    </Container>
  );
};

export default Header;
