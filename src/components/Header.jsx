import NavBar from "./NavBar";
import LinkButton from "./LinkButton";
import { infoIcons } from "../data/IconsData";
import { ReactComponent as Panda } from "../assets/Panda.svg";

import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Header = () => {
  const buttons = [
    { link: "https://www.github.com/tiagowu", icon: infoIcons.github },
    { link: "https://www.linkedin.com/in/tiago-wu/", icon: infoIcons.linkedin },
    { link: "https://www.linkedin.com/in/tiago-wu/", icon: infoIcons.resume },
  ];

  return (
    <HeaderContainer maxWidth={false}>
      <NavBar />
      <ContentBox>
        <LogoBox>
          <Panda />
        </LogoBox>
        <TextBox>
          <Typography variant="h4" sx={{ typography: { sm: "h3" } }}>
            Hello!
          </Typography>
          <Typography variant="h4" sx={{ typography: { sm: "h3" } }}>
            I am Tiago Wu.
          </Typography>
          <Subtitle variant="h6">Third-year Computer Science student at Stony Brook University seeking a career in software development.</Subtitle>
          <ButtonContainer>
            {buttons.map((button, index) => (
              <LinkButton key={index} link={button.link} icon={button.icon} iconProps={{ fontSize: 32 }} />
            ))}
          </ButtonContainer>
        </TextBox>
      </ContentBox>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Container)(() => ({
  display: "flex",
  alignItems: "center",
  minHeight: "100vh",
  paddingTop: 72,
}));

const ContentBox = styled(Box)(({ theme }) => ({
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

const LogoBox = styled(Box)(({ theme }) => ({
  minWidth: 180,
  paddingBottom: 16,
  [theme.breakpoints.up("sm")]: {
    minWidth: 240,
    paddingRight: 64,
    paddingBottom: 0,
  },
}));

const TextBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const Subtitle = styled(Typography)(() => ({
  color: "lightgray",
}));

const ButtonContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  gap: "12px",
  height: "48px",
});

export default Header;
