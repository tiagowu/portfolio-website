import { Button } from "@mui/material";
import { styled } from "@mui/system";

const NavButtons = ({ navigations }) => {
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const url = `/#${id}`;
      window.history.pushState(null, "", url);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {navigations.map((item) => (
        <NavButton
          href={`#${item.id}`}
          key={item.id}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(item.id);
          }}
        >
          {item.label}
        </NavButton>
      ))}
    </>
  );
};

/* Styled Components */
const NavButton = styled(Button)({
  color: "white",
});

export default NavButtons;
