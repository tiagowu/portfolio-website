import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/ProjectsData";

const Projects = () => {
  const reversedProjectsData = [...projectsData].reverse();

  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle variant="h4">Projects</ProjectsTitle>
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

const ProjectsTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(4),
  paddingTop: theme.spacing(9),
}));

const ProjectGridContainer = styled(Grid)({
  justifyContent: "center",
});

export default Projects;
