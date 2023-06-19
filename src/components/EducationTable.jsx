import { coursesData } from "../data/CoursesData";

import { Container, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { styled } from "@mui/system";

const EducationTable = () => {
  const sortedCoursesData = [...coursesData].reverse().sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));

  return (
    <EducationTableContainer disableGutters>
      <EducationTableWrapper>
        <TableHead>
          <TableRow>
            <EducationTableCell>Course</EducationTableCell>
            <EducationTableCell>Course Name</EducationTableCell>
            <EducationTableCell>Instructor</EducationTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedCoursesData.map((course, index) => (
            <TableRow key={index}>
              <EducationTableCell completed={String(course.completed)}>{course.courseNumber}</EducationTableCell>
              <EducationTableCell completed={String(course.completed)}>{course.courseName}</EducationTableCell>
              <EducationTableCell completed={String(course.completed)}>{course.instructor}</EducationTableCell>
            </TableRow>
          ))}
        </TableBody>
      </EducationTableWrapper>
    </EducationTableContainer>
  );
};

const EducationTableContainer = styled(Container)(({ theme }) => ({
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

const EducationTableWrapper = styled(Table)({
  margin: "auto",
  maxWidth: 1000,
  "& tbody tr:last-child td": {
    borderBottom: "none",
  },
});

const EducationTableCell = styled(TableCell)(({ completed, theme }) => ({
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

export default EducationTable;
