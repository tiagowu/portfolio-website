import { projectsData } from "../data/ProjectsData";
import { iconsData } from "../data/IconsData";

import { Box, Card, CardContent, Container, Divider, Grid, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import DemoIcon from "@mui/icons-material/OpenInNew";

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
            <Card sx={{ display: "flex", flexDirection: "column", maxWidth: "440px", minHeight: "240px", height: "100%" }}>
              <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <Typography variant="caption" sx={{ margin: "8px" }}>
                  {project.completedOn}
                </Typography>
                <Typography variant="h5" sx={{ textAlign: "center", mb: "12px" }}>
                  {project.projectName}
                </Typography>
                <Divider />
                <Typography variant="body1" mt="12px" mb="12px">
                  {project.description}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: "auto" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", height: "48px", gap: "16px" }}>
                    {project.technologies.map((technology, index) =>
                      iconsData.hasOwnProperty(technology.toLowerCase()) ? (
                        <Box key={index} display="flex" alignItems="center" sx={{ fontSize: "32px" }}>
                          {iconsData[technology.toLowerCase()]}
                        </Box>
                      ) : (
                        <Typography key={index}>{technology}</Typography>
                      )
                    )}
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <IconButton disableRipple sx={{ color: "black" }}>
                          <GitHubIcon sx={{ fontSize: "32px" }} />
                        </IconButton>
                      </a>
                    )}
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <IconButton disableRipple sx={{ color: "black" }}>
                          <DemoIcon sx={{ fontSize: "32px" }} />
                        </IconButton>
                      </a>
                    )}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
