import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/system";

const NavDrawer = ({ navigations, isDrawerOpen, toggleDrawer }) => {
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

  return (
    <StyledDrawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
      <List>
        {navigations.map((item) => (
          <ListItem key={item.id} onClick={toggleDrawer}>
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
