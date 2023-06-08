import React from "react";
import projectsData from "../data/projectsData";

import { Box, Card, CardContent, Container, Divider, Grid, Typography } from "@mui/material";

const Projects = () => {
  const reversedProjectsData = [...projectsData].reverse();

  return (
    <Container sx={{ paddingTop: "72px" }} id="projects">
      <Typography variant="h4">Projects</Typography>
      <Grid container spacing={2} wrap="wrap" justifyContent="center">
        {reversedProjectsData.map((project, index) => (
          <Grid item key={index} sx={{ alignItems: "center", justifyContent: "center" }}>
            <Card sx={{ maxWidth: "380px", height: "100%" }}>
              <CardContent>
                <Typography variant="caption" sx={{ margin: "8px" }}>
                  {project.completedOn}
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center", marginBottom: "12px" }}>
                  {project.projectName}
                </Typography>
                <Divider />
                <Typography variant="caption" sx={{ marginTop: "12px" }}>
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
