import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/system";

const NavDrawer = ({ navigations, isDrawerOpen, toggleDrawer, handleNavClick }) => {
  const handleItemClick = (id) => {
    toggleDrawer();
    setTimeout(() => {
      handleNavClick(id);
    }, 100);
  };

  return (
    <NavigationDrawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
      <List>
        {navigations.map((navigation) => (
          <ListItem
            key={navigation.id}
            onClick={(e) => {
              e.preventDefault();
              handleItemClick(navigation.id);
            }}
          >
            <NavDrawerButton>
              <ListItemText primary={navigation.label} />
            </NavDrawerButton>
          </ListItem>
        ))}
      </List>
    </NavigationDrawer>
  );
};

/* Styled Components */
const NavigationDrawer = styled(Drawer)({
  width: 250,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 250,
    boxSizing: "border-box",
    backgroundColor: "#242933",
  },
});

const NavDrawerButton = styled(ListItemButton)({
  borderRadius: 8,
});

export default NavDrawer;
