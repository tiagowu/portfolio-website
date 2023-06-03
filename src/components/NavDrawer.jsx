import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/system";

const NavDrawer = ({ navigations, isDrawerOpen, toggleDrawer, handleNavClick }) => {
  const StyledDrawer = styled(Drawer)(() => ({
    width: 250,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 250,
      boxSizing: "border-box",
      backgroundColor: "",
    },
  }));

  const DrawerButton = styled(ListItemButton)(() => ({
    backgroundColor: "",
    color: "",
    "&:hover": {
      backgroundColor: "",
    },
  }));

  const handleClick = (href) => {
    toggleDrawer();
    setTimeout(() => {
      handleNavClick(href);
    }, 100);
  };

  return (
    <StyledDrawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
      <List>
        {navigations.map((item) => (
          <ListItem key={item.id} onClick={() => handleClick(item.href)}>
            <DrawerButton>
              <ListItemText primary={`${item.id.toString().padStart(2, "0")}. ${item.label}`} />
            </DrawerButton>
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default NavDrawer;
