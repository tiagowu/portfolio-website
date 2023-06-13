import LinkButton from "./LinkButton";
import { iconsData } from "../data/IconsData";

import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import DemoIcon from "@mui/icons-material/OpenInNew";

const ProjectCard = ({ project }) => {
  return (
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
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
            {project.githubLink && <LinkButton link={project.githubLink} icon={GitHubIcon} iconProps={{ fontSize: "24px" }} />}
            {project.demoLink && <LinkButton link={project.demoLink} icon={DemoIcon} iconProps={{ fontSize: "24px" }} />}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
