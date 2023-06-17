import { coursesData } from "../data/CoursesData";
import { ReactComponent as SBULogo } from "../assets/SBULogo.svg";

import { Box, Container, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Education = () => {
  const sortedCoursesData = [...coursesData].reverse().sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
  return (
    <StyledContainer id="education">
      <StyledTitle variant="h4">Education</StyledTitle>
      <StyledInfoWrapper>
        <StyledSBULogo />
        <StyledInfoBox>
          <Typography variant="body1">Stony Brook University</Typography>
          <Typography variant="body1">Computer Science, B.S.</Typography>
          <Typography variant="body1">Exp. Grad: May 2024</Typography>
          <Typography variant="body1">Cumulative GPA: 3.83</Typography>
        </StyledInfoBox>
      </StyledInfoWrapper>
      <StyledTableWrapper disableGutters>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledTableCell>Course</StyledTableCell>
              <StyledTableCell>Course Name</StyledTableCell>
              <StyledTableCell>Instructor</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedCoursesData.map((course, index) => {
              const completedString = course.completed.toString();
              return (
                <TableRow key={index}>
                  <StyledTableCell completed={completedString}>{course.courseNumber}</StyledTableCell>
                  <StyledTableCell completed={completedString}>{course.courseName}</StyledTableCell>
                  <StyledTableCell completed={completedString}>{course.instructor}</StyledTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </StyledTable>
      </StyledTableWrapper>
    </StyledContainer>
  );
};

/* Styled Components */
const StyledContainer = styled(Container)({
  width: "100%",
});

const StyledTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(4),
  paddingTop: theme.spacing(9),
}));

const StyledInfoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    whiteSpace: "nowrap",
    textAlign: "center",
  },
}));

const StyledSBULogo = styled(SBULogo)({
  width: 120,
  height: 120,
});

const StyledInfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(0.5),
  },
}));

const StyledTableWrapper = styled(Container)(({ theme }) => ({
  overflowX: "auto",
  paddingLeft: 0,
  paddingRight: 0,
  "&::-webkit-scrollbar": {
    height: 4,
  },
  "&::-webkit-scrollbar-thumb": {
    background: theme.palette.primary.main,
    borderRadius: 16,
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "darkgray",
  },
}));

const StyledTable = styled(Table)({
  margin: "auto",
  maxWidth: 1000,

  "& tbody tr:last-child td": {
    borderBottom: "none",
  },
});

const StyledTableCell = styled(TableCell)(({ completed, theme }) => ({
  "&.MuiTableCell-body": {
    color: completed === "true" ? "#70b337" : "red",
  },
  "&.MuiTableCell-head": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  fontSize: 14,
  padding: theme.spacing(2),
  borderBottom: `1px solid white`,
  whiteSpace: "nowrap",
  [theme.breakpoints.down("sm")]: {
    "&:nth-of-type(2)": {
      whiteSpace: "normal",
      minWidth: 200,
    },
  },
}));

export default Education;
