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
    <HeaderContainer>
      <NavBar />
      <HeaderContentBox>
        <HeaderLogoBox>
          <Panda />
        </HeaderLogoBox>
        <HeaderTextBox>
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
        </HeaderTextBox>
      </HeaderContentBox>
    </HeaderContainer>
  );
};

/* Styled Components */
const HeaderContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minHeight: "100vh",
  maxWidth: "100%",
  paddingTop: theme.spacing(9),
}));

const HeaderContentBox = styled(Box)(({ theme }) => ({
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

const HeaderLogoBox = styled(Box)(({ theme }) => ({
  minWidth: 180,
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    minWidth: 240,
    paddingRight: theme.spacing(8),
    paddingBottom: 0,
  },
}));

const HeaderTextBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const HeaderSubtext = styled(Typography)({
  color: "lightgray",
});

const HeaderButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  gap: theme.spacing(1),
  height: 48,
}));

export default Header;
