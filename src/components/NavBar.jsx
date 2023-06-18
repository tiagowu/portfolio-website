import { useState } from "react";
import NavButtons from "./NavButtons";
import NavDrawer from "./NavDrawer";
import { ReactComponent as Logo } from "../assets/Logo.svg";

import { AppBar, Box, IconButton, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";

const NavBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const navigations = [
    { id: "about", label: "01. ABOUT" },
    { id: "education", label: "02. EDUCATION" },
    { id: "projects", label: "03. PROJECTS" },
    { id: "skills", label: "04. SKILLS" },
    { id: "contact", label: "05. CONTACT" },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <NavAppBar>
      <NavToolbar disableGutters>
        <NavBarLogoBox>
          <NavLogo />
        </NavBarLogoBox>
        {isSmallScreen ? (
          <>
            <NavMenuButton onClick={toggleDrawer}>
              <MenuIcon />
            </NavMenuButton>
            <NavDrawer navigations={navigations} isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
          </>
        ) : (
          <NavButtons navigations={navigations} />
        )}
      </NavToolbar>
    </NavAppBar>
  );
};

/* Styled Components */
const NavAppBar = styled(AppBar)({
  position: "fixed",
  backgroundColor: "#242933",
});

const NavToolbar = styled(Toolbar)(({ theme }) => ({
  height: 64,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

const NavBarLogoBox = styled(Box)({
  flexGrow: 1,
});

const NavLogo = styled(Logo)({
  width: 80,
});

const NavMenuButton = styled(IconButton)({
  color: "inherit",
});

export default NavBar;
