import NavBar from "./NavBar";
import LinkButton from "./LinkButton";
import { infoIcons } from "../data/IconsData";
import { ReactComponent as Panda } from "../assets/Panda.svg";

import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Header = () => {
  const buttonsInfo = [
    { link: "https://www.github.com/tiagowu", icon: infoIcons.github },
    { link: "https://www.linkedin.com/in/tiago-wu/", icon: infoIcons.linkedin },
    { link: "https://www.linkedin.com/in/tiago-wu/", icon: infoIcons.resume },
  ];

  return (
    <HeaderContainer maxWidth={false}>
      <NavBar />
      <HeaderContent>
        <HeaderLogo>
          <Panda />
        </HeaderLogo>
        <HeaderText>
          <Typography variant="h4" sx={{ typography: { sm: "h3" } }}>
            Hello!
          </Typography>
          <Typography variant="h4" sx={{ typography: { sm: "h3" } }}>
            I am Tiago Wu.
          </Typography>
          <HeaderSubtext variant="h6">
            Third-year Computer Science student at Stony Brook University seeking a career in software development.
          </HeaderSubtext>
          <HeaderButtons>
            {buttonsInfo.map((button, index) => (
              <LinkButton key={index} link={button.link} icon={button.icon} iconProps={{ fontSize: 32 }} />
            ))}
          </HeaderButtons>
        </HeaderText>
      </HeaderContent>
    </HeaderContainer>
  );
};

/* Styled Components */
const HeaderContainer = styled(Container)(() => ({
  display: "flex",
  alignItems: "center",
  minHeight: "100vh",
  paddingTop: 72,
}));

const HeaderContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100%",
  maxWidth: "100%",
  margin: "0 auto",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    maxWidth: 900,
  },
}));

const HeaderLogo = styled(Box)(({ theme }) => ({
  minWidth: 180,
  paddingBottom: 16,
  [theme.breakpoints.up("sm")]: {
    minWidth: 240,
    paddingRight: 64,
    paddingBottom: 0,
  },
}));

const HeaderText = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const HeaderSubtext = styled(Typography)(() => ({
  color: "lightgray",
}));

const HeaderButtons = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  gap: "12px",
  height: "48px",
});

export default Header;
