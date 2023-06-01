import NavButtons from "./NavButtons";

import { AppBar, Box, Toolbar } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar disableGutters sx={{ height: "64px", paddingLeft: "16px", paddingRight: "16px" }}>
        <Box flexGrow={1}>LOGO</Box>
        <NavButtons />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
