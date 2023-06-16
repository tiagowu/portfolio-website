import LinkButton from "./LinkButton";
import { skillIcons, infoIcons } from "../data/IconsData";

import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";

const ProjectCard = ({ project }) => {
  const renderTechnologies = () => {
    return project.technologies.map((technology, index) => {
      const technologyKey = technology.toLowerCase();
      if (skillIcons.hasOwnProperty(technologyKey)) {
        return <IconBox key={index}>{skillIcons[technologyKey]}</IconBox>;
      }
      return (
        <Typography key={index} variant="h6">
          {technology}
        </Typography>
      );
    });
  };

  return (
    <CardWrapper>
      <CardContentWrapper>
        <DateTagContainer>
          <DateTag variant="caption">{project.completedOn}</DateTag>
        </DateTagContainer>
        <Title variant="h5">{project.projectName}</Title>
        <DividerLine />
        <Description variant="body1">{project.description}</Description>
        <CardFooter>
          <Technologies>{renderTechnologies()}</Technologies>
          <Actions>
            {project.githubLink && <LinkButton link={project.githubLink} icon={infoIcons.github} iconProps={{ fontSize: 24 }} />}
            {project.demoLink && <LinkButton link={project.demoLink} icon={infoIcons.demo} iconProps={{ fontSize: 24 }} />}
          </Actions>
        </CardFooter>
      </CardContentWrapper>
    </CardWrapper>
  );
};

/* Styled Components */
const CardWrapper = styled(Card)(() => ({
  minHeight: 240,
  maxWidth: 440,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "inherit",
}));

const CardContentWrapper = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  border: `2px solid ${theme.palette.primary.main}`,
}));

const DateTagContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
}));

const DateTag = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: 16,
  padding: 8,
  marginBottom: 8,
}));

const Title = styled(Typography)(() => ({
  textAlign: "center",
  marginBottom: 16,
}));

const DividerLine = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const Description = styled(Typography)(() => ({
  marginTop: 8,
  marginBottom: 8,
}));

const Technologies = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  height: 48,
  gap: 8,
}));

const IconBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  fontSize: 32,
}));

const CardFooter = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "auto",
}));

const Actions = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
}));

export default ProjectCard;
