import { useState } from "react";
import NavDrawer from "./NavDrawer";

import { Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavButtons = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const navigations = [
    { id: 1, label: "About", href: "#about" },
    { id: 2, label: "Education", href: "#education" },
    { id: 3, label: "Projects", href: "#projects" },
    { id: 4, label: "Skills", href: "#skills" },
    { id: 5, label: "Contact", href: "#contact" },
  ];

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {isSmallScreen ? (
        <>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <NavDrawer navigations={navigations} isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} handleNavClick={handleNavClick} />
        </>
      ) : (
        navigations.map((item) => (
          <Button key={item.id} color="inherit" onClick={() => handleNavClick(item.href)}>
            {`${item.id.toString().padStart(2, "0")}. ${item.label}`}
          </Button>
        ))
      )}
    </>
  );
};

export default NavButtons;
