import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/ProjectsData";

import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Projects = () => {
  const reversedProjectsData = [...projectsData].reverse();

  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle variant="h4">Project</ProjectsTitle>
      <ProjectGridContainer container spacing={4}>
        {reversedProjectsData.map((project, index) => (
          <Grid item key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </ProjectGridContainer>
    </ProjectsContainer>
  );
};

/* Styled Components */
const ProjectsContainer = styled(Container)({
  width: "100%",
});

const ProjectsTitle = styled(Typography)({
  textAlign: "center",
  paddingBottom: 32,
  paddingTop: 72,
});

const ProjectGridContainer = styled(Grid)({
  justifyContent: "center",
});

export default Projects;
