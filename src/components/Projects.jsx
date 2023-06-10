import React from "react";
import projectsData from "../data/projectsData";

import { Box, Card, CardContent, Container, Divider, Grid, Typography } from "@mui/material";

const Projects = () => {
  const reversedProjectsData = [...projectsData].reverse();

  return (
    <Container id="projects" sx={{ pt: "72px" }}>
      <Typography variant="h4" align="center" paddingBottom="32px">
        Project
      </Typography>
      <Grid container spacing={8} wrap="wrap" justifyContent="center">
        {reversedProjectsData.map((project, index) => (
          <Grid item key={index} sx={{ alignItems: "center", justifyContent: "center" }}>
            <Card sx={{ maxWidth: "480px", height: "100%" }}>
              <CardContent>
                <Typography variant="caption" sx={{ margin: "8px" }}>
                  {project.completedOn}
                </Typography>
                <Typography variant="h5" sx={{ textAlign: "center", marginBottom: "12px" }}>
                  {project.projectName}
                </Typography>
                <Divider />
                <Typography variant="body1" sx={{ marginTop: "12px" }}>
                  {project.description}
                </Typography>
                <Box>
                  <Divider orientation="vertical" />
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
