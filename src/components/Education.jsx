import coursesData from "../data/coursesData";

import { Container, Table, TableBody, TableCell, TableHead, TableRow, tableCellClasses } from "@mui/material";
import { styled } from "@mui/system";

const Education = () => {
  const StyledEducationContainer = styled(Container)(({ theme }) => ({
    paddingTop: "72px",
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
    maxWidth: "600px",
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
        Education
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
