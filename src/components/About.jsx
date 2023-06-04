import React from "react";

import { Container } from "@mui/material";

const About = () => {
  const about = `class Tiago {
    constructor() {
      this.name = "Tiago Wu";
      this.current_city = "Staten Island, New York"
      this.college = "Stony Brook University";
      this.expected_graduation_date = "May 2024";
      this.projects = viewProjects();
      this.skills = viewSkills();
      this.interests_and_hobbies = [];
    }\n}`;

  return (
    <>
      <Container sx={{ height: "100vh", paddingTop: "72px" }} id="about">
        About
      </Container>
    </>
  );
};

export default About;
