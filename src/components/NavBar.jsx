import { useState, useEffect } from "react";
import NavButtons from "./NavButtons";
import NavDrawer from "./NavDrawer";
import { ReactComponent as Logo } from "../assets/Logo.svg";

import { AppBar, Box, IconButton, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";

const NavBar = () => {
  useEffect(() => {
    const defaultUrl = "/";
    const entries = window.performance.getEntriesByType("navigation");
    const navigationEntry = entries[0];

    if (navigationEntry.type === "reload") {
      window.location.href = defaultUrl;
    }
  }, []);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const navigations = [
    { id: "about", label: "01. ABOUT" },
    { id: "education", label: "02. EDUCATION" },
    { id: "projects", label: "03. PROJECTS" },
    { id: "skills", label: "04. SKILLS" },
    { id: "contact", label: "05. CONTACT" },
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const url = `/#${id}`;
      window.history.pushState(null, "", url);
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <NavAppBar>
      <NavToolbar disableGutters>
        <NavLogoBox onClick={handleNavClick}>
          <NavLogo />
        </NavLogoBox>
        {isSmallScreen ? (
          <>
            <NavMenuButton onClick={toggleDrawer}>
              <MenuIcon />
            </NavMenuButton>
            <NavDrawer navigations={navigations} isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} handleNavClick={handleNavClick} />
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

const NavLogoBox = styled(Box)({
  flexGrow: 1,
});

const NavLogo = styled(Logo)({
  width: 80,
  cursor: "pointer",
});

const NavMenuButton = styled(IconButton)({
  color: "inherit",
});

export default NavBar;
