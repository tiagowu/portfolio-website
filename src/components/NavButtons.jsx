import { useState } from "react";
import NavDrawer from "./NavDrawer";

import { Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavButtons = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const navigations = [
    { id: 1, label: "About" },
    { id: 2, label: "Education" },
    { id: 3, label: "Projects" },
    { id: 4, label: "Skills" },
    { id: 5, label: "Contact" },
  ];

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
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
          <Button
            href={`#${item.label.toLowerCase()}`}
            key={item.id}
            color="inherit"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.label.toLowerCase());
            }}
          >
            {`${item.id.toString().padStart(2, "0")}. ${item.label}`}
          </Button>
        ))
      )}
    </>
  );
};

export default NavButtons;
