import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/system";

const NavDrawer = ({ navigations, isDrawerOpen, toggleDrawer }) => {
  const handleItemClick = (id) => {
    toggleDrawer();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const url = `/#${id}`;
        window.history.pushState(null, "", url);
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <StyledDrawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
      <List>
        {navigations.map((item) => (
          <ListItem
            key={item.id}
            onClick={(e) => {
              e.preventDefault();
              handleItemClick(item.id);
            }}
          >
            <DrawerButton>
              <ListItemText primary={item.label} />
            </DrawerButton>
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

/* Styled Components */
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 250,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 250,
    boxSizing: "border-box",
    backgroundColor: "#242933",
  },
}));

const DrawerButton = styled(ListItemButton)(() => ({
  borderRadius: 8,
}));

export default NavDrawer;
