import React from "react";
import coursesData from "../data/coursesData";

import { Container, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const Education = () => {
  const sortedCoursesData = [...coursesData].reverse().sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
  return (
    <>
      <Container sx={{ paddingTop: "72px" }} id="education">
        Education
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course Number</TableCell>
              <TableCell>Course Name</TableCell>
              <TableCell>Instructor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedCoursesData.map((course, index) => (
              <TableRow key={index}>
                <TableCell>{course.courseNumber}</TableCell>
                <TableCell>{course.courseName}</TableCell>
                <TableCell>{course.instructor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </>
  );
};

export default Education;
