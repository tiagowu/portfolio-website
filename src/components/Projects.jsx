import React from "react";
import projectsData from "../data/projectsData";

import { Card, CardContent, Container, Divider, Grid, Typography } from "@mui/material";

const Projects = () => {
  return (
    <Container sx={{ paddingTop: "72px" }} id="projects">
      <Typography variant="h4">Projects</Typography>
      <Grid container spacing={2} wrap="wrap" justifyContent="center">
        {projectsData.map((project, index) => (
          <Grid item key={index} sx={{ alignItems: "center", justifyContent: "center" }}>
            <Card sx={{ maxWidth: "380px", height: "100%" }}>
              <CardContent>
                <Typography variant="h6">{project.projectName}</Typography>
                <Divider />
                <Typography variant="body1">{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
