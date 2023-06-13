import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/ProjectsData";

import { Container, Grid, Typography } from "@mui/material";

const Projects = () => {
  const reversedProjectsData = [...projectsData].reverse();

  return (
    <Container id="projects" sx={{ pt: "72px" }}>
      <Typography variant="h4" align="center" pb="32px">
        Project
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {reversedProjectsData.map((project, index) => (
          <Grid item key={index} sx={{ alignItems: "center", justifyContent: "center" }}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
