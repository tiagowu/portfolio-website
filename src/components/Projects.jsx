import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/ProjectsData";

import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Projects = () => {
  const reversedProjectsData = [...projectsData].reverse();

  return (
    <Container id="projects" maxWidth={false}>
      <Title variant="h4">Project</Title>
      <ProjectGridContainer container spacing={4}>
        {reversedProjectsData.map((project, index) => (
          <Grid item key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </ProjectGridContainer>
    </Container>
  );
};

/* Styled Components */
const Title = styled(Typography)(() => ({
  textAlign: "center",
  paddingBottom: 32,
  paddingTop: 72,
}));

const ProjectGridContainer = styled(Grid)(() => ({
  justifyContent: "center",
}));

export default Projects;
