import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";

import LinkButton from "./LinkButton";
import { skillIcons, infoIcons } from "../data/IconsData";

const ProjectCard = ({ project }) => {
  const { completedOn, projectName, description, technologies, githubLink, demoLink } = project;

  const renderTechnology = (technology, index) => {
    const lowercaseTechnology = technology.toLowerCase();
    return lowercaseTechnology in skillIcons ? (
      <ProjectIconBox key={index}>{skillIcons[lowercaseTechnology]}</ProjectIconBox>
    ) : (
      <Typography key={index} variant="h6">
        {technology}
      </Typography>
    );
  };

  return (
    <ProjectCardContainer>
      <ProjectContentContainer>
        <ProjectDateBox>
          <ProjectDate variant="caption">{completedOn}</ProjectDate>
        </ProjectDateBox>
        <ProjectTitle variant="h5">{projectName}</ProjectTitle>
        <ProjectDivider />
        <ProjectDescription variant="body1">{description}</ProjectDescription>
        <ProjectCardFooter>
          <ProjectTechnologies>{technologies.map(renderTechnology)}</ProjectTechnologies>
          <ProjectActions>
            {githubLink && <LinkButton link={githubLink} icon={infoIcons.github} iconProps={{ fontSize: 24 }} />}
            {demoLink && <LinkButton link={demoLink} icon={infoIcons.demo} iconProps={{ fontSize: 24 }} />}
          </ProjectActions>
        </ProjectCardFooter>
      </ProjectContentContainer>
    </ProjectCardContainer>
  );
};

/* Styled Components */
const ProjectCardContainer = styled(Card)({
  minHeight: 240,
  maxWidth: 440,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "inherit",
});

const ProjectContentContainer = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  border: `2px solid ${theme.palette.primary.main}`,
}));

const ProjectDateBox = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
});

const ProjectDate = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: 16,
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(2),
}));

const ProjectDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const ProjectTechnologies = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  height: 48,
  gap: theme.spacing(1),
}));

const ProjectIconBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  fontSize: 32,
});

const ProjectCardFooter = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "auto",
});

const ProjectActions = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export default ProjectCard;
