import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { ReactComponent as SBULogo } from "../assets/SBULogo.svg";

const EducationInfo = () => {
  return (
    <EducationInfoBox>
      <EducationSBULogo />
      <EducationTextBox>
        <Typography variant="h6">Stony Brook University</Typography>
        <Typography variant="h6">Computer Science, B.S.</Typography>
        <Typography variant="h6">Aug. 2021 - May 2024</Typography>
        <Typography variant="h6">Cumulative GPA: 3.80</Typography>
      </EducationTextBox>
    </EducationInfoBox>
  );
};

const EducationInfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    whiteSpace: "nowrap",
    textAlign: "center",
  },
}));

const EducationSBULogo = styled(SBULogo)({
  width: 120,
  height: 120,
});

const EducationTextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(0.5),
  },
}));

export default EducationInfo;
