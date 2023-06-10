import coursesData from "../data/coursesData";
import { ReactComponent as SBULogo } from "../assets/SBULogo.svg";

import { Box, Container, Table, TableBody, TableCell, TableHead, TableRow, Typography, tableCellClasses } from "@mui/material";
import { styled } from "@mui/system";

const Education = () => {
  const StyledEducationContainer = styled(Container)(({ theme }) => ({
    paddingTop: "72px",
  }));

  const StyledEducationBox = styled(Box)(({ theme, index }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    marginBottom: "16px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      whiteSpace: "nowrap",

      textAlign: "center",
    },
    "& svg": {
      width: "120px",
      height: "120px",
    },
    "& > div": {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      [theme.breakpoints.down("sm")]: {
        gap: "4px",
      },
      "& p": {
        fontSize: "16px",
        [theme.breakpoints.down("sm")]: {
          // fontSize: "14px",
        },
      },
    },
  }));

  const StyledTableContainer = styled(Container)(({ theme }) => ({
    overflowX: "auto",
    paddingLeft: "0px",
    paddingRight: "0px",
    "&::-webkit-scrollbar": {
      height: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "red",
      borderRadius: "16px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "darkgray",
    },
  }));

  const StyledTable = styled(Table)(({ theme }) => ({
    margin: "auto",
    maxWidth: "1000px",
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "red",
      color: "green",
    },
    [`&.${tableCellClasses.body}`]: {
      color: "red",
    },
    fontSize: "14px",
    padding: "12px",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("sm")]: {
      "&:nth-of-type(2)": {
        whiteSpace: "normal",
        minWidth: "200px",
      },
    },
  }));

  const sortedCoursesData = [...coursesData].reverse().sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
  return (
    <>
      <StyledEducationContainer id="education">
        <Typography variant="h4" align="center" paddingBottom="16px">
          Education
        </Typography>
        <StyledEducationBox>
          <SBULogo />
          <Box>
            <Typography>Stony Brook University </Typography>
            <Typography>Computer Science, B.S.</Typography>
            <Typography>Exp. Grad: May 2024</Typography>
            <Typography>Cumulative GPA: 3.83</Typography>
          </Box>
        </StyledEducationBox>
        <StyledTableContainer disableGutters>
          <StyledTable>
            <TableHead>
              <TableRow>
                <StyledTableCell>Course</StyledTableCell>
                <StyledTableCell>Course Name</StyledTableCell>
                <StyledTableCell>Instructor</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedCoursesData.map((course, index) => (
                <TableRow key={index}>
                  <StyledTableCell>{course.courseNumber}</StyledTableCell>
                  <StyledTableCell>{course.courseName}</StyledTableCell>
                  <StyledTableCell>{course.instructor}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </StyledTableContainer>
      </StyledEducationContainer>
    </>
  );
};

export default Education;
