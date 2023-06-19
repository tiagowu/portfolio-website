import EducationInfo from "./EducationInfo";
import EducationTable from "./EducationTable";

import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Education = () => {
  return (
    <EducationContainer id="education">
      <EducationTitle variant="h4">Education</EducationTitle>
      <EducationInfo />
      <EducationTable />
    </EducationContainer>
  );
};

/* Styled Components */
const EducationContainer = styled(Container)({
  width: "100%",
});

const EducationTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(4),
  paddingTop: theme.spacing(9),
}));

export default Education;
