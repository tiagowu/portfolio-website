import NavButtons from "./NavButtons";
import { ReactComponent as Logo } from "../assets/Logo.svg";

import { AppBar, Box, Toolbar } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar disableGutters sx={{ height: "64px", pl: "16px", pr: "16px", backgroundColor: "#242933" }}>
        <Box flexGrow={1}>
          <Logo style={{ width: "80px" }} />
        </Box>
        <NavButtons />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
